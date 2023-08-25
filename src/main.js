import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


const Home = { template: '<div>Home</div>' }
const Legacy = { template: '<div>Legacy</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/legacy', component: Legacy },
  ]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


// const app = Vue.createApp({})
// app.use(router)
// app.mount('#app')