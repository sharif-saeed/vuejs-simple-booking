import LoginPage from "../pages/LoginPage.vue"
import DashboardPage from "../pages/DashboardPage.vue"
import BookingPage from "../pages/BookingPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: LoginPage
    },
    {
        path: "/dashboard",
        component: DashboardPage
    },
    {
        path: "/booking",
        component: BookingPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router