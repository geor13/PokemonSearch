<template>
  <template v-if="indexLoading">
    <LoadingPokemon />
  </template>
  <template v-else>
    <ul ref="list">
      <li v-for="(pokemon) in pokemonData" :key="pokemon.id" tabindex="0">
        <Transition name="pokemon" appear type="transition">
          <RouterLink :to="{ name: 'info', params: { pokemonName: pokemon.name } }">
            <PokemonTeaser :pokemon="pokemon"/>
          </RouterLink>
        </Transition>
      </li>
    </ul>
  </template>

  <p v-if="scrollLoading">Loading Pokemon...</p>
</template>

<script setup>
  import { usePokemonStore } from '../stores/pokemon.js';
  import { useInfiniteScroll } from '@vueuse/core';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import PokemonTeaser from './PokemonTeaser.vue';
  import LoadingPokemon from './LoadingPokemon.vue';

  const list = ref(null);
  const indexLoading = ref(true);
  const scrollLoading = ref(false);

  const pokemonStore = usePokemonStore();
  const { pokemon: pokemonData } = storeToRefs(pokemonStore);

  // needs to reset to prevent errors
  // when navigating from other routes
  pokemonStore.resetCurrentURL()

  pokemonStore.setPokemon()
  .then(function(incomingData) {
    pokemonData.value = incomingData;
    indexLoading.value = false;
  })
  .catch(function(error) {
    console.log('error is ', error)
  })

  // got it from vue use composables library
  // use it for infinite scroll
  useInfiniteScroll(
    list,
    async () => {
      if (pokemonStore.searching || !pokemonStore.NEXT_URL) {
        return;
      }

      scrollLoading.value = true;
      pokemonStore.CURRENT_URL = pokemonStore.NEXT_URL;

      const paginatedData = await pokemonStore.setPokemon()
      pokemonData.value = pokemonData.value.concat(paginatedData);

      scrollLoading.value = false;
    },
    { distance: 10, interval: 500 }
  )

</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 0 2rem;
  gap: 1rem;
  max-height: calc(100vh - 260px);
  margin: 0;
  padding: 1.5em .8em;
  overflow-y: auto;
}

ul li {
  list-style: none;
}

ul li a {
  text-decoration: none;
  color: #444;
}

.pokemon-enter-active,
.pokemon-leave-active  {
    transition: 1s .2s all ease-in-out;
}

.pokemon-enter-from,
.pokemon-leave-to  {
    opacity: 0;
    rotate: y 90deg;
}

</style>
