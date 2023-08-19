import { createRouter, createWebHashHistory } from 'vue-router'
import PokemonList from './components/PokemonList.vue'
import MoveList from './components/MoveList.vue'
import Error404 from './components/Error404.vue'

const routes = [
    {
        path: '/',
        component: PokemonList,
        name: 'home'
    },
    {
        path: '/moves',
        component: MoveList,
        name: 'moves'
    },
    {
        path: '/:page(.*)*',
        component: Error404,
        name: 'error'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router