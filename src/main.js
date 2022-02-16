import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useComponents } from './plugins/components'
import './plugins/theme.css'
import './plugins/common.css'
const app = createApp(App)
useComponents(app).use(router).use(store).mount('#app')
