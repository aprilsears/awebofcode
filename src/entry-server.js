import { createSSRApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { renderToString } from '@vue/server-renderer'
import App from './App.vue'

const routes = [
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/about', component: () => import('./views/AboutView.vue') },
  { path: '/services', component: () => import('./views/ServicesView.vue') },
  { path: '/portfolio', component: () => import('./views/PortfolioView.vue') },
  { path: '/contact', component: () => import('./views/ContactView.vue') },
  { path: '/privacy', component: () => import('./views/PrivacyView.vue') },
  { path: '/terms', component: () => import('./views/TermsView.vue') },
]

export async function render(url) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  const app = createSSRApp(App)
  app.use(router)

  await router.push(url)
  await router.isReady()

  return renderToString(app)
}
