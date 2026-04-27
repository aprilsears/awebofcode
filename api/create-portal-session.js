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

  const { data: client } = await supabase
    .from('clients')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .single()

  if (!client?.stripe_customer_id) {
    return res.status(400).json({ error: 'No billing account found' })
  }

  const ORIGIN = process.env.APP_ORIGIN || 'https://awebofcode.com'
  const returnUrl = req.body.returnUrl
  let validatedReturnUrl
  try {
    validatedReturnUrl = new URL(returnUrl).origin === ORIGIN ? returnUrl : ORIGIN
  } catch {
    validatedReturnUrl = ORIGIN
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: client.stripe_customer_id,
    return_url: validatedReturnUrl,
  })

  res.status(200).json({ url: session.url })
}
