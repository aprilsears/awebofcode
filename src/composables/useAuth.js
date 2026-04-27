import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

const currentUser = ref(null)

supabase.auth.getSession().then(({ data: { session } }) => {
  currentUser.value = session?.user ?? null
})

supabase.auth.onAuthStateChange((_event, session) => {
  currentUser.value = session?.user ?? null
})

export function useAuth() {
  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return { currentUser, signIn, signOut }
}
