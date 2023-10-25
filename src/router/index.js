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
        path: '/create-event-info',
        name: 'create-event-info',
        component: () => import('@/views/CreateEventInfo.vue')
    },
    {
        path: '/create-event-media',
        name: 'create-event-media',
        component: () => import('@/views/CreateEventMedia.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
