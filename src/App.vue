<template>
  <header>
    <section aria-label="pokemon search">
      <RouterLink :to="{ name: 'home' }">
        <img alt="Pokemon logo" class="logo" src="./assets/logo.png" width="125" />
      </RouterLink>
      <PokemonSearch/>
    </section>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
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
