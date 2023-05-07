import {createRouter, createWebHistory} from 'vue-router'
import selectedGame from "@/pages/selectedGame.vue";
import main from "@/pages/main.vue";


const routes = [
    {
        path:'/',
        component: main
    },
    {
        path:'/game/:slug',
        component: selectedGame
    },
]

const router = createRouter({
    routes,
    mode: 'history',
    history: createWebHistory('/'),
})

export default router