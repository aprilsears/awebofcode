import { createSSRApp as createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { inject } from '@vercel/analytics'

inject()

const app = createApp(App)
app.use(router)
router.isReady().then(() => app.mount('#app'))
