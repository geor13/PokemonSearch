<template>
  <header>
    <section aria-label="pokemon search">
      <img alt="Pokemon logo" class="logo" src="./assets/logo.png" width="125" />
      <PokemonSearch/>
    </section>
  </header>

  <main>
    <PokemonList />
  </main>
</template>

<script setup>
  import PokemonList from './components/PokemonList.vue'
  import PokemonSearch from './components/PokemonSearch.vue'

</script>

<style scoped>
  header {
    background: linear-gradient(to bottom, #bde0fe, #a2d2ff);
    padding: 1.5rem;
  }

  section[aria-label="pokemon search"] {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .logo {
    display: block;
    aspect-ratio: 625 / 229;
    width: min(100%, 400px);
    margin: 1rem auto;
  }
</style>
