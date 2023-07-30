<script setup>
  import { searchPokemon } from '../utils/pokemonUtils.js';
</script>

<template>
  <section aria-label="pokemon search">
    <input
      type="text"
      placeholder="Enter Pokemon Name"
      id="pokemonSearch"
      name="pokemon"
      @input="searchPokemon($event.target.value)" />
  </section>
</template>

<style scoped>
  input {
    padding: .5rem 1.5rem;
  }
</style>