import { defineStore } from "pinia";
import { fetchPokemon } from "../utils/pokemonUtils";
import { indexPokemon } from "../utils/pokemonUtils";
import { ref } from "vue";
import { ALL_POKEMON_URL, INITIAL_POKEMON_PAGINATION } from "../utils/urls";

export const usePokemonStore = defineStore('pokemonStore',  () => {
    const pokemon = ref([]);
    const searching = ref(false);
    const CURRENT_URL = ref(INITIAL_POKEMON_PAGINATION);
    const NEXT_URL = ref('');
    const PREVIOUS_URL = ref('');
    const nameSearch = ref(true);

    async function indexAllPokemon() {
        try {
            const pokemonData = await fetchPokemon(ALL_POKEMON_URL);
            indexPokemon(pokemonData)
        } catch (error) {
            console.log(error)
        }
    }

    async function setPokemon() {
        try {
            return await fetchPokemon(this.CURRENT_URL);
        } catch (error) {
            console.log(error)
        }
    }

    function setPokemonSearch(pokemon) {
        this.pokemon = pokemon
    }

    function resetCurrentURL() {
        this.CURRENT_URL = INITIAL_POKEMON_PAGINATION
    }

    return {
        pokemon,
        setPokemon,
        setPokemonSearch,
        CURRENT_URL,
        PREVIOUS_URL,
        ALL_POKEMON_URL,
        NEXT_URL,
        searching,
        indexAllPokemon,
        nameSearch,
        resetCurrentURL
    }
});