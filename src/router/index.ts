import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: "/",
        //     component: () => import("../views/home/index.vue"),
        //     meta: {
        //         layout: "default",
        //     },
        // },
        {
            path: "/login",
            component: () => import("../views/login/index.vue"),
        },
        {
            path: "/register",
            component: () => import("../views/register/index.vue"),
        },
        {
            path: "/dashboard",
            component: () => import("../views/dashboard/index.vue"),
        },
        
        {
            path: "/mainjob",
            component: () => import("../views/mainjob/index.vue"),
            
        }
    ],
})

export default router
