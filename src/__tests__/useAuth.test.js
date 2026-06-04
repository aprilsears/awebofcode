import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the supabase module before importing useAuth
const mockGetSession = vi.fn().mockResolvedValue({ data: { session: null } })
const mockOnAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }))
const mockSignIn = vi.fn()
const mockSignOut = vi.fn()

vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      getSession: mockGetSession,
      onAuthStateChange: mockOnAuthStateChange,
      signInWithPassword: mockSignIn,
      signOut: mockSignOut,
    },
  },
}))

// Import after mock is set up
const { useAuth } = await import('@/composables/useAuth.js')

describe('useAuth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('signIn calls supabase with email and password', async () => {
    mockSignIn.mockResolvedValue({ error: null })
    const { signIn } = useAuth()
    await signIn('test@example.com', 'password123')
    expect(mockSignIn).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' })
  })

  it('signIn throws when supabase returns an error', async () => {
    const err = new Error('Invalid credentials')
    mockSignIn.mockResolvedValue({ error: err })
    const { signIn } = useAuth()
    await expect(signIn('bad@example.com', 'wrong')).rejects.toThrow('Invalid credentials')
  })

  it('signOut calls supabase signOut', async () => {
    mockSignOut.mockResolvedValue({ error: null })
    const { signOut } = useAuth()
    await signOut()
    expect(mockSignOut).toHaveBeenCalled()
  })

  it('signOut throws when supabase returns an error', async () => {
    const err = new Error('Sign out failed')
    mockSignOut.mockResolvedValue({ error: err })
    const { signOut } = useAuth()
    await expect(signOut()).rejects.toThrow('Sign out failed')
  })
})
