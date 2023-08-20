import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes.js'
import { usePokemonStore } from './stores/pokemon.js';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const pokemonStore = usePokemonStore();
pokemonStore.indexAllPokemon();

app.mount('#app');
