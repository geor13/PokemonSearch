<template>
    <article>
        <section>
            <div>
                <li v-for="(type) in pokemon.types" :key="type">
                    <span :class="type">{{ type }}</span>
                </li>
            </div>

            <img :src="pokemon.front_default"/>
        </section>

        <div>
            <h3>
                {{ pokemon.name }}
                <span>#{{ pokemon.id }}</span>
            </h3>

            <PokemonStats :stats="pokemonStats" />
        </div>
    </article>
</template>

<script setup>
    import { computed } from 'vue'
    import PokemonStats from './PokemonStats.vue';

    const props = defineProps({
        pokemon: {
            type: Object,
            required: true
        }
    })

    const pokemonStats = computed(() => {
        return {
            hp: props.pokemon.hp,
            attack: props.pokemon.attack,
            special_attack: props.pokemon.special_attack,
            defense: props.pokemon.defense,
            special_defense: props.pokemon.special_defense,
            speed: props.pokemon.speed,
        }
    })

</script>

<style scoped>

article {
    text-align: center;
    padding: 100px 0;
    border-radius: .7rem;
    padding: 1.2rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11);
}

article section {
    font-size: .7rem;
    color: white;
    margin-right: auto;
    display: grid;
    grid-template-columns: max-content 1fr;
}

article section li {
    margin-bottom: .5rem;
}

article section span {
    padding: .2rem .5rem;
    border-radius: .4rem;
}

div {
    text-align: left;
}

div h3 {
    display: grid;
    grid-template-columns: 1fr max-content;
    text-align: center;
    align-items: center;
}

div h3 span {
    font-size: .85rem;
    color: #666;
    margin-left: 1rem;
    font-weight: normal;
}

</style>