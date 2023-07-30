<template>
  <ul ref="list">
    <li v-for="(pokemon) in pokemonData" :key="pokemon.id" tabindex="0">
      <Transition name="pokemon" appear type="transition">
        <PokemonTeaser :pokemon="pokemon"/>
      </Transition>
    </li>
  </ul>

  <p v-if="loading">Loading Pokemon...</p>
</template>

<script setup>
  import { usePokemonStore } from '../stores/pokemon.js';
  import { ref } from 'vue';
  import { useInfiniteScroll } from '@vueuse/core'
  import PokemonTeaser from './PokemonTeaser.vue';
  import { storeToRefs } from 'pinia';

  const list = ref(null);
  const loading = ref(false);

  const pokemonStore = usePokemonStore();
  await pokemonStore.indexAllPokemon();
  const initialData = await pokemonStore.setPokemon();

  const { pokemon: pokemonData } = storeToRefs(pokemonStore);
  pokemonData.value = initialData;

  useInfiniteScroll(
    list,
    async () => {
      if (pokemonStore.searching || !pokemonStore.NEXT_URL) {
        return;
      }

      loading.value = true;
      pokemonStore.CURRENT_URL = pokemonStore.NEXT_URL;

      const paginatedData = await pokemonStore.setPokemon()
      pokemonData.value = pokemonData.value.concat(paginatedData);

      loading.value = false;
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
