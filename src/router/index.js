import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../lib/supabase'

const routes = [
  { path: '/', component: () => import('../views/HomeView.vue'), meta: { title: 'A Web of Code | Custom Web Development' } },
  { path: '/about', component: () => import('../views/AboutView.vue'), meta: { title: 'About | A Web of Code' } },
  { path: '/services', component: () => import('../views/ServicesView.vue'), meta: { title: 'Services | A Web of Code' } },
  { path: '/portfolio', component: () => import('../views/PortfolioView.vue'), meta: { title: 'Portfolio | A Web of Code' } },
  { path: '/contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact | A Web of Code' } },
  { path: '/login', component: () => import('../views/LoginView.vue'), meta: { title: 'Client Login | A Web of Code' } },
  { path: '/dashboard', component: () => import('../views/DashboardView.vue'), meta: { title: 'Client Portal | A Web of Code', requiresAuth: true } },
  { path: '/privacy', component: () => import('../views/PrivacyView.vue'), meta: { title: 'Privacy Policy | A Web of Code' } },
  { path: '/terms', component: () => import('../views/TermsView.vue'), meta: { title: 'Terms of Service | A Web of Code' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    if (!supabase) return '/login'
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return '/login'
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'A Web of Code'
})

export default router
