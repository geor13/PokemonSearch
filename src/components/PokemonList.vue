<template>
  <template v-if="indexLoading">
      <h2>Loading pokemon ...</h2>
  </template>
  <template v-else>
    <ul ref="list">
      <li v-for="(pokemon) in pokemonData" :key="pokemon.id" tabindex="0">
        <Transition name="pokemon" appear type="transition">
          <PokemonTeaser :pokemon="pokemon"/>
        </Transition>
      </li>
    </ul>
  </template>

  <p v-if="scrollLoading">Loading Pokemon...</p>
</template>

<script setup>
  import { usePokemonStore } from '../stores/pokemon.js';
  import { ref } from 'vue';
  import { useInfiniteScroll } from '@vueuse/core';
  import PokemonTeaser from './PokemonTeaser.vue';
  import { storeToRefs } from 'pinia';

  const list = ref(null);
  const scrollLoading = ref(false);
  const indexLoading = ref(true);

  const pokemonStore = usePokemonStore();
  const { pokemon: pokemonData } = storeToRefs(pokemonStore);

  pokemonStore.indexAllPokemon()
  .then(function() {
    return pokemonStore.setPokemon()
  })
  .then(function(incomingData) {
    const initialData = incomingData;
    pokemonData.value = initialData;
    indexLoading.value = false;
  })
  .catch(function(error) {
    console.log('error is ', error)
  })


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

  & li {
    list-style: none;
  }
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
