<script setup>
  import { searchPokemon } from '../utils/pokemonUtils.js';
  import { usePokemonStore } from '../stores/pokemon.js';
  import { computed, watch, ref } from 'vue';
  import { useMagicKeys } from '@vueuse/core';

  const pokemonStore = usePokemonStore();
  const placeholderMsg = computed(() => pokemonStore.nameSearch
    ? 'Enter Pokemon Name to search by name'
    : 'Enter Pokemon Type to search by type'
  );

  const searchInput = ref(null);

  const keys = useMagicKeys()
  const space = keys['Cmd+K']

  watch(space, (v) => {
    if (v) searchInput.value.focus()
  })

  function setNameSearch() {
    pokemonStore.nameSearch = true;
  }

  function setTypeSearch() {
    pokemonStore.nameSearch = false;
  }

</script>

<template>
  <section aria-label="pokemon search">
    <input
      ref="searchInput"
      type="text"
      :placeholder="placeholderMsg"
      id="pokemonSearch"
      name="pokemon"
      @input="searchPokemon($event.target.value)" />
      <button
        :class="{ active: pokemonStore.nameSearch }"
        @click="setNameSearch">
          Search by Νame
      </button>
      <button
        :class="{ active: !pokemonStore.nameSearch }"
        @click="setTypeSearch">
          Search by Τype
      </button>
  </section>
</template>

<style scoped>

  section[aria-label="pokemon search"] {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    padding-top: 1.5rem;
  }

  input {
    border: none;
    padding: .8rem 1.5rem;
    border-radius: .3rem 0 0 .3rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11);
  }

  section button {
    border: none;
    cursor: pointer;
    padding: 0 .9rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11);
  }

  section button:nth-child(3){
    border-radius: 0 .3rem .3rem 0;
  }

  section button.active {
    background-color: #E5709B;
    color: white;
  }
</style>