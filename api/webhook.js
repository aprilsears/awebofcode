import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export const config = { api: { bodyParser: false } }

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const sig = req.headers['stripe-signature']
  const rawBody = await getRawBody(req)

  let event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` })
  }

  const data = event.data.object

  switch (event.type) {
    case 'checkout.session.completed': {
      const userId = data.metadata?.user_id
      if (!userId) break

      const { data: existingClient } = await supabase
        .from('clients')
        .select('id')
        .eq('user_id', userId)
        .single()

      if (!existingClient) {
        await supabase.from('clients').insert({
          user_id: userId,
          stripe_customer_id: data.customer,
        })
      }
      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const { data: client } = await supabase
        .from('clients')
        .select('id')
        .eq('stripe_customer_id', data.customer)
        .single()

      if (!client) break

      await supabase.from('subscriptions').upsert({
        client_id: client.id,
        stripe_subscription_id: data.id,
        plan_name: data.items.data[0]?.price?.nickname ?? 'Plan',
        status: data.status,
        current_period_end: new Date(data.current_period_end * 1000).toISOString(),
      }, { onConflict: 'stripe_subscription_id' })
      break
    }

    case 'customer.subscription.deleted': {
      await supabase
        .from('subscriptions')
        .update({ status: 'canceled' })
        .eq('stripe_subscription_id', data.id)
      break
    }

    case 'invoice.payment_succeeded':
    case 'invoice.payment_failed': {
      const { data: client } = await supabase
        .from('clients')
        .select('id')
        .eq('stripe_customer_id', data.customer)
        .single()

      if (!client) break

      await supabase.from('invoices').upsert({
        client_id: client.id,
        stripe_invoice_id: data.id,
        amount_cents: data.amount_due,
        status: data.status,
        due_date: data.due_date ? new Date(data.due_date * 1000).toISOString() : null,
        paid_at: data.status_transitions?.paid_at
          ? new Date(data.status_transitions.paid_at * 1000).toISOString()
          : null,
      }, { onConflict: 'stripe_invoice_id' })
      break
    }
  }

  res.status(200).json({ received: true })
}
