<template>
    <template v-if="!loading">
        <section>
            <h2>{{ pokemonName }}</h2>
            <img width="150" height="150" :src="image">
            <PokemonStats :stats="normalizedStats" />
        </section>
    </template>

    <template v-else>
        <LoadingPokemon />
    </template>
</template>

<script setup>
    import PokemonStats from './PokemonStats.vue';
    import axios from 'axios';
    import { ref, computed } from 'vue';
    import LoadingPokemon from './LoadingPokemon.vue';

    const props = defineProps({
        pokemonName: {
            type: String,
            required: true
        }
    })

    const image = ref(null)
    const rawStats = ref(null)
    const loading = ref(true)

    const normalizedStats = computed(() => {
        if (!rawStats.value) {
            return null
        }

        const stats = {}

        rawStats.value.forEach((stat) => {
            stats[stat.stat.name.replace('-', '_')] = stat.base_stat
        })

        return stats
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}/`)
    .then(function(response) {
        image.value = response.data.sprites.front_default
        rawStats.value = response.data.stats

        console.log('response is ', response.data)
        loading.value = false
    })

</script>

<style scoped>
    section {
        padding: 20px;
    }
</style>