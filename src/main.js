import { createSSRApp as createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { inject } from '@vercel/analytics'

inject()

createApp(App)
  .use(router)
  .mount('#app')

app.use(VueGtag, {
  property: {id:
    import.meta.env.VITE_GA_TRACKING_ID }
  }, router)
