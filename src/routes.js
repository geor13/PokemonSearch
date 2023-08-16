import { createRouter, createWebHashHistory } from 'vue-router'
import PokemonList from './components/PokemonList.vue'
import MoveList from './components/MoveList.vue'

const routes = [
    {
        path: '/',
        component: PokemonList
    },
    {
        path: '/moves',
        component: MoveList
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router