import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

// Build a minimal router that mirrors the auth guard logic
function makeRouter(supabase) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/login', component: { template: '<div />' } },
      { path: '/dashboard', component: { template: '<div />' }, meta: { requiresAuth: true } },
    ],
  })

  router.beforeEach(async (to) => {
    if (to.meta.requiresAuth) {
      if (!supabase) return '/login'
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return '/login'
    }
  })

  return router
}

describe('router auth guard', () => {
  it('redirects to /login when supabase is null', async () => {
    const router = makeRouter(null)
    await router.push('/dashboard')
    expect(router.currentRoute.value.path).toBe('/login')
  })

  it('redirects to /login when there is no active session', async () => {
    const supabase = {
      auth: { getSession: vi.fn().mockResolvedValue({ data: { session: null } }) },
    }
    const router = makeRouter(supabase)
    await router.push('/dashboard')
    expect(router.currentRoute.value.path).toBe('/login')
  })

  it('allows navigation when a session exists', async () => {
    const supabase = {
      auth: { getSession: vi.fn().mockResolvedValue({ data: { session: { user: { id: '123' } } } }) },
    }
    const router = makeRouter(supabase)
    await router.push('/dashboard')
    expect(router.currentRoute.value.path).toBe('/dashboard')
  })

  it('does not call getSession for public routes', async () => {
    const supabase = {
      auth: { getSession: vi.fn() },
    }
    const router = makeRouter(supabase)
    await router.push('/')
    expect(supabase.auth.getSession).not.toHaveBeenCalled()
  })
})
