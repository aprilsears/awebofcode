import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

inject()
injectSpeedInsights()

createApp(App)
  .use(router)
  .use(Particles, {
    init: async engine => {
      await loadSlim(engine)
    }
  })
  .mount('#app')
