import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing required env vars: VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false }
})

const TEST_EMAIL = 'test@awebofcode.com'
const TEST_PASSWORD = 'testpassword123'

const { data, error } = await supabase.auth.admin.createUser({
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
  email_confirm: true
})

if (error) {
  if (error.message.includes('already been registered')) {
    console.log(`Test user already exists: ${TEST_EMAIL}`)
  } else {
    console.error('Error creating test user:', error.message)
    process.exit(1)
  }
} else {
  console.log(`Test user created: ${data.user.email}`)
}

console.log('\nTest login credentials:')
console.log(`  Email:    ${TEST_EMAIL}`)
console.log(`  Password: ${TEST_PASSWORD}`)
