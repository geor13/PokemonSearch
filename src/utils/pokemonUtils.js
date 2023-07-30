import axios from 'axios';
import miniSearch from './searchEngine.js'
import { usePokemonStore } from '../stores/pokemon.js'
import { INITIAL_POKEMON_PAGINATION } from "../utils/urls";

async function fetchPokemon(fetchUrl) {
    try {
        const rawData = await axios.get(fetchUrl)
        const pokemonList = rawData.data.results.map((pokemon) => {
            return { url: pokemon.url }
        });

        const pokemonData = [];

        const store = usePokemonStore();
        store.NEXT_URL = rawData.data.next;
        store.PREVIOUS_URL = rawData.data.previous;

        await (async () => {
            let pokemonDetails = await fetchPokemonDetails(pokemonList);
            for await (let details of pokemonDetails) {
                const {
                    id,
                    species: { name },
                    sprites: { back_default , front_default },
                    types,
                    stats: [
                        { base_stat: hp },
                        { base_stat: attack },
                        { base_stat: defense },
                        { base_stat: special_attack },
                        { base_stat: special_defense },
                        { base_stat: speed }
                    ]
                } = details

                const pokemon = {
                    id,
                    name,
                    back_default,
                    front_default,
                    types,
                    hp,
                    attack,
                    defense,
                    special_attack,
                    special_defense,
                    speed
                }

                pokemonData.push(pokemon)
            }

        })();

        return pokemonData

    } catch (error) {
        alert(`error ${error}`)
    }
}

function indexPokemon(pokemon) {
    miniSearch.addAll(pokemon)
}

async function* fetchPokemonDetails(pokemonData) {
    for (const pokemon of pokemonData) {
        const data = await axios.get(pokemon.url)

        yield data.data
    }
}

async function searchPokemon(name) {
    const searchTerm = (name === '') ? 'pokemon' : name;
    const results = await miniSearch.search(searchTerm)

    const store = usePokemonStore();
    store.searching = (name === '') ? false : true;

    if (store.searching) {
        store.setPokemonSearch(results)
    } else {
        store.CURRENT_URL = INITIAL_POKEMON_PAGINATION;
        const initialData =  await store.setPokemon()
        store.setPokemonSearch(initialData)
    }
}

export { fetchPokemon, searchPokemon, indexPokemon }
