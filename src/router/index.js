import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/create-event',
        name: 'create-event',
        component: () => import('@/views/CreateEvent.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
