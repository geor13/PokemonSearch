<template>
    <article>
        <img :src="pokemon.front_default"/>
        <div>
            <h3>
                {{ pokemon.name }}
                <span>#{{ pokemon.id }}</span>
            </h3>
            <p>
                <span>HP</span>
                <span><span></span></span>
                <span>{{ pokemon.hp }}</span>
            </p>
            <p>
                <span>ATK</span>
                <span><span></span></span>
                <span>{{ pokemon.attack }}</span>
            </p>
            <p>
                <span>SP ATK</span>
                <span><span></span></span>
                <span>{{ pokemon.special_attack }}</span>
            </p>
            <p>
                <span>DEF</span>
                <span><span></span></span>
                <span>{{ pokemon.defense }}</span>
            </p>
            <p>
                <span>SP DEF</span>
                <span><span></span></span>
                <span>{{ pokemon.special_defense }}</span>
            </p>
            <p>
                <span>SPD</span>
                <span><span></span></span>
                <span>{{ pokemon.speed }}</span>
            </p>
        </div>
    </article>
</template>

<script setup>
    import { onMounted } from 'vue';

    const props = defineProps({
        pokemon: {
            type: Object,
            required: true
        }
    })

    onMounted(() => {
        // console.log('Mounted!')
    })

    const stats = {
        hp: `${props.pokemon.hp}px`,
        attack: `${props.pokemon.attack}px`,
        special_attack: `${props.pokemon.special_attack}px`,
        defense: `${props.pokemon.defense}px`,
        special_defense: `${props.pokemon.special_defense}px`,
        speed: `${props.pokemon.speed}px`,
    }

</script>

<style scoped>

article {
    border: 1px solid #ccc;
    text-align: center;
    padding: 100px 0;
    border-radius: .7rem;
    padding: 1.2rem;
}

div {
    text-align: left;

    & h3 {
        display: grid;
        grid-template-columns: 1fr max-content;
        text-align: center;
        align-items: center;

        & span {
            font-size: .85rem;
            color: #666;
            margin-left: 1rem;
            font-weight: normal;
        }
    }

    & p {
        font-size: .8rem;
        display: grid;
        gap: .5rem;
        grid-template-columns: max-content 1fr max-content;
        align-items: center;

        & :nth-child(1) {
            font-weight: bold;
            font-size: 1rem;
        }
        & :nth-child(2) span {
            display: block;
            height: .5rem;
            background: linear-gradient(45deg, darkred 30%, crimson);
            border-radius: 2rem;
        }

        &:nth-child(2) span:nth-child(2) span {
            width: clamp(0%, v-bind(stats.hp), 100%);
        }

        &:nth-child(3) span:nth-child(2) span {
            width: clamp(0%, v-bind(stats.attack), 100%);
        }

        &:nth-child(4) span:nth-child(2) span {
            width: clamp(0%, v-bind(stats.special_attack), 100%);
        }

        &:nth-child(5) span:nth-child(2) span {
            width: clamp(0%, v-bind(stats.defense), 100%);
        }

        &:nth-child(6) span:nth-child(2) span {
            width: clamp(0%, v-bind(stats.special_defense), 100%);
        }

        &:nth-child(7) span:nth-child(2) span {
            width: clamp(0%, v-bind(stats.speed), 100%);
        }
    }
}

</style>