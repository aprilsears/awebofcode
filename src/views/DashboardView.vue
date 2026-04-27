<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Decorative background orbs -->
    <div class="absolute top-10 right-10 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-steel/50 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative px-8 md:px-16 lg:px-32 py-24">

      <!-- Header -->
      <section class="mb-12 flex items-start justify-between flex-wrap gap-4">
        <div>
          <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">Client Portal</p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-3">Your Account</h1>
          <p class="text-silver text-sm">{{ currentUser?.email }}</p>
        </div>
        <button
          @click="handleSignOut"
          class="bg-steel/30 backdrop-blur-sm border border-silver/20 text-silver px-6 py-2 rounded-xl text-sm font-medium hover:border-silver/40 transition-colors duration-200"
        >
          Sign Out
        </button>
      </section>

      <div v-if="loading" class="text-silver text-sm">Loading your account...</div>

      <div v-else class="space-y-12">

        <!-- Active Plans -->
        <section>
          <h2 class="text-ivory font-semibold text-xl mb-6">Active Plans</h2>
          <div v-if="subscriptions.length === 0" class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-6 text-silver text-sm">
            No active plans. Contact us to get started.
          </div>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="sub in subscriptions"
              :key="sub.stripe_subscription_id"
              class="relative bg-steel/40 backdrop-blur-sm border border-emerald/20 rounded-xl p-6 overflow-hidden"
            >
              <div class="absolute inset-0 bg-linear-to-br from-emerald/10 to-transparent pointer-events-none"></div>
              <div class="relative">
                <div class="flex items-center justify-between mb-3">
                  <p class="text-ivory font-semibold">{{ sub.plan_name }}</p>
                  <span
                    :class="sub.status === 'active' ? 'text-emerald bg-emerald/10 border-emerald/30' : 'text-red-400 bg-red-900/10 border-red-500/20'"
                    class="text-xs font-semibold px-3 py-1 rounded-full border capitalize"
                  >{{ sub.status }}</span>
                </div>
                <p class="text-silver text-sm">
                  Next billing: {{ formatDate(sub.current_period_end) }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Manage Billing -->
        <section>
          <h2 class="text-ivory font-semibold text-xl mb-6">Billing</h2>
          <div class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p class="text-ivory font-medium mb-1">Manage payment method &amp; subscriptions</p>
              <p class="text-silver text-sm">Update your card, view upcoming charges, or cancel a plan.</p>
            </div>
            <button
              @click="openPortal"
              :disabled="portalLoading"
              class="bg-emerald/20 backdrop-blur-sm border border-emerald/50 text-emerald px-8 py-3 rounded-xl font-semibold tracking-wide hover:bg-emerald/40 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              {{ portalLoading ? 'Opening...' : 'Manage Billing' }}
            </button>
          </div>
          <div v-if="portalError" class="mt-3 bg-red-900/20 border border-red-500/30 rounded-xl px-6 py-4 text-red-400 text-sm">
            {{ portalError }}
          </div>
        </section>

        <!-- Invoice History -->
        <section>
          <h2 class="text-ivory font-semibold text-xl mb-6">Invoice History</h2>
          <div v-if="invoices.length === 0" class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl p-6 text-silver text-sm">
            No invoices yet.
          </div>
          <div v-else class="bg-steel/30 backdrop-blur-sm border border-silver/10 rounded-xl overflow-hidden">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-silver/10">
                  <th class="text-left text-silver font-medium px-6 py-4">Date</th>
                  <th class="text-left text-silver font-medium px-6 py-4">Amount</th>
                  <th class="text-left text-silver font-medium px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="inv in invoices"
                  :key="inv.stripe_invoice_id"
                  class="border-b border-silver/5 last:border-0"
                >
                  <td class="text-ivory px-6 py-4">{{ formatDate(inv.due_date ?? inv.paid_at) }}</td>
                  <td class="text-ivory px-6 py-4">${{ (inv.amount_cents / 100).toFixed(2) }}</td>
                  <td class="px-6 py-4">
                    <span
                      :class="inv.status === 'paid' ? 'text-emerald bg-emerald/10 border-emerald/30' : 'text-silver bg-steel/40 border-silver/20'"
                      class="text-xs font-semibold px-3 py-1 rounded-full border capitalize"
                    >{{ inv.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { currentUser, signOut } = useAuth()

const loading = ref(true)
const subscriptions = ref([])
const invoices = ref([])
const portalLoading = ref(false)
const portalError = ref('')

async function loadData() {
  const { data: client } = await supabase
    .from('clients')
    .select('id')
    .eq('user_id', currentUser.value.id)
    .single()

  if (!client) {
    loading.value = false
    return
  }

  const [{ data: subs }, { data: invs }] = await Promise.all([
    supabase.from('subscriptions').select('*').eq('client_id', client.id).order('current_period_end', { ascending: false }),
    supabase.from('invoices').select('*').eq('client_id', client.id).order('due_date', { ascending: false }),
  ])

  subscriptions.value = subs ?? []
  invoices.value = invs ?? []
  loading.value = false
}

async function openPortal() {
  portalLoading.value = true
  portalError.value = ''
  try {
    const { data: { session } } = await supabase.auth.getSession()
    const res = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ returnUrl: window.location.href }),
    })
    const { url, error } = await res.json()
    if (error) throw new Error(error)
    window.location.href = url
  } catch (err) {
    portalError.value = err.message ?? 'Could not open billing portal. Please try again.'
    portalLoading.value = false
  }
}

async function handleSignOut() {
  await signOut()
  router.push('/')
}

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

onMounted(loadData)
</script>
