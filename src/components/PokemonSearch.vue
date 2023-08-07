<script setup>
  import { searchPokemon } from '../utils/pokemonUtils.js';
</script>

<template>
  <section aria-label="pokemon search">
    <input
      type="text"
      placeholder="Enter Pokemon Name or Pokemon Type to search by type"
      id="pokemonSearch"
      name="pokemon"
      @input="searchPokemon($event.target.value)" />
  </section>
</template>

<style scoped>

  section[aria-label="pokemon search"] {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 1.5rem;
  }

  input {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11);
    border: none;
    padding: .8rem 1.5rem;
    border-radius: .3rem;
  }
</style>