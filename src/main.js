import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'


inject()
injectSpeedInsights()

createApp(App)
  .use(router)
  .mount('#app')
