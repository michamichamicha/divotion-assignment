import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsOverview from '../views/ProductsOverview.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ProductsOverview,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
