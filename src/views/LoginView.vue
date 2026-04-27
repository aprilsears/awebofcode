<template>
  <div class="relative min-h-screen overflow-hidden flex items-center justify-center">

    <!-- Decorative background orbs -->
    <div class="absolute top-10 right-10 w-80 h-80 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-steel/50 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative w-full max-w-md px-8 py-16">

      <div class="mb-10 text-center">
        <p class="text-emerald text-xs font-semibold tracking-widest uppercase mb-4">Client Access</p>
        <h1 class="text-4xl font-bold leading-tight mb-3">Client Portal</h1>
        <p class="text-silver text-sm leading-relaxed">Sign in to view your plans, invoices, and billing.</p>
      </div>

      <form class="space-y-5" @submit.prevent="handleSignIn">
        <div>
          <label class="block text-silver text-sm font-medium mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            required
            placeholder="your@email.com"
            class="w-full bg-steel/30 backdrop-blur-sm border border-silver/20 rounded-xl px-4 py-3 text-ivory placeholder-silver/40 focus:outline-none focus:border-emerald/60 transition-colors"
          />
        </div>

        <div>
          <label class="block text-silver text-sm font-medium mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full bg-steel/30 backdrop-blur-sm border border-silver/20 rounded-xl px-4 py-3 text-ivory placeholder-silver/40 focus:outline-none focus:border-emerald/60 transition-colors"
          />
        </div>

        <div v-if="error" class="bg-red-900/20 border border-red-500/30 rounded-xl px-6 py-4 text-red-400 text-sm">
          {{ error }}
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-emerald/20 backdrop-blur-sm border border-emerald/50 text-emerald px-10 py-3 rounded-xl font-semibold tracking-wide hover:bg-emerald/40 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { signIn } = useAuth()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function handleSignIn() {
  loading.value = true
  error.value = ''
  try {
    await signIn(email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message ?? 'Sign in failed. Please check your credentials.'
  } finally {
    loading.value = false
  }
}
</script>
