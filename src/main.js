import { createSSRApp as createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { inject } from '@vercel/analytics'
import VueGtag from 'vue-gtag'

inject()

const app = createApp(App)

app.use(router)
app.use(VueGtag, { property: { id: import.meta.env.VITE_GA_TRACKING_ID } }, router)
app.mount('#app')
