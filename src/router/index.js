import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import { supabase } from '../lib/supabase'

const routes = [
  { path: '/', component: HomeView, meta: { title: 'A Web of Code | Custom Web Development' } },
  { path: '/about', component: AboutView, meta: { title: 'About | A Web of Code' } },
  { path: '/services', component: ServicesView, meta: { title: 'Services | A Web of Code' } },
  { path: '/portfolio', component: PortfolioView, meta: { title: 'Portfolio | A Web of Code' } },
  { path: '/contact', component: ContactView, meta: { title: 'Contact | A Web of Code' } },
  { path: '/login', component: LoginView, meta: { title: 'Client Login | A Web of Code' } },
  { path: '/dashboard', component: DashboardView, meta: { title: 'Client Portal | A Web of Code', requiresAuth: true } },
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
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return '/login'
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'A Web of Code'
})

export default router
