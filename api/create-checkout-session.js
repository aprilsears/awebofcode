import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'Unauthorized' })

  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  if (authError || !user) return res.status(401).json({ error: 'Unauthorized' })

  const { priceId, successUrl, cancelUrl } = req.body

  const ALLOWED_PRICE_IDS = (process.env.ALLOWED_PRICE_IDS || '').split(',').filter(Boolean)
  if (!priceId || (ALLOWED_PRICE_IDS.length && !ALLOWED_PRICE_IDS.includes(priceId))) {
    return res.status(400).json({ error: 'Invalid price' })
  }

  const ORIGIN = process.env.APP_ORIGIN || 'https://awebofcode.com'
  const isValidUrl = (url) => { try { return new URL(url).origin === ORIGIN } catch { return false } }
  if (!isValidUrl(successUrl) || !isValidUrl(cancelUrl)) {
    return res.status(400).json({ error: 'Invalid redirect URL' })
  }

  const { data: client } = await supabase
    .from('clients')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .single()

  const session = await stripe.checkout.sessions.create({
    customer: client?.stripe_customer_id,
    customer_email: client?.stripe_customer_id ? undefined : user.email,
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: { user_id: user.id },
  })

  res.status(200).json({ url: session.url })
}
