    import { createRouter, createWebHistory } from 'vue-router'
    import Layout from '../layouts/Layout.vue'
    import Home from '../views/Home.vue'

    const routes = [
    {
        path: '/',
        component: Layout,       
        children: [
        { path: '', component: Home },
        ]
    }
    ]

    const router = createRouter({
    history: createWebHistory(),
    routes,
    })

    export default router
