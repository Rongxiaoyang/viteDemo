import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueI18n from './i18n/index'
import './index.css'

createApp(App)
.use(router)
.use(VueI18n)
.mount('#app')
