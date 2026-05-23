import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
  property: { id: import.meta.env.VITE_GA_ID }
}, router)

app.mount('#app')