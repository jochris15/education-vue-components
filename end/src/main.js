import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'

const app = createApp(App)

app.mount('#app')

// global registration
app.component('NavBar', NavBar)