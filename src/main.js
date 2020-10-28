import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import cUi from './components/index.js'

const app = createApp(App)
app.use(cUi)
app.mount('#app')
