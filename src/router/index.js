import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    App,
})
  
export default router;