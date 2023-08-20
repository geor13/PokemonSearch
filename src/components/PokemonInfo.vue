<template>
    <section>
        <h2>{{ pokemonName }}</h2>
    </section>
</template>

<script setup>
    import PokemonStats from './PokemonStats.vue';
    import axios from 'axios';

    defineProps({
        pokemonName: {
            type: String,
            required: true
        }
    })

</script>

<style scoped>
    section {
        padding: 20px;
    }
</style>