<template>
    <p>
        <span>HP</span>
        <span><span class="stat hp"></span></span>
        <span>{{ stats.hp }}</span>
    </p>
    <p>
        <span>ATK</span>
        <span><span class="stat attack"></span></span>
        <span>{{ stats.attack }}</span>
    </p>
    <p>
        <span>SP ATK</span>
        <span><span class="stat special_attack"></span></span>
        <span>{{ stats.special_attack }}</span>
    </p>
    <p>
        <span>DEF</span>
        <span><span class="stat defense"></span></span>
        <span>{{ stats.defense }}</span>
    </p>
    <p>
        <span>SP DEF</span>
        <span><span class="stat special_defense"></span></span>
        <span>{{ stats.special_defense }}</span>
    </p>
    <p>
        <span>SPD</span>
        <span><span class="stat speed"></span></span>
        <span>{{ stats.speed }}</span>
    </p>
</template>

<style scoped>
    p {
        font-size: .8rem;
        display: grid;
        gap: .5rem;
        grid-template-columns: max-content 1fr max-content;
        align-items: center;
    }

    p :nth-child(1) {
        font-weight: bold;
        font-size: 1rem;
    }

    p :nth-child(2) span {
        display: block;
        height: .5rem;
        border-radius: 2rem;
    }

    p:nth-child(2) span:nth-child(2) span {
        width: clamp(0%, v-bind(statStyles.hp), 100%);
    }

    p:nth-child(3) span:nth-child(2) span {
        width: clamp(0%, v-bind(statStyles.attack), 100%);
    }

    p:nth-child(4) span:nth-child(2) span {
        width: clamp(0%, v-bind(statStyles.special_attack), 100%);
    }

    p:nth-child(5) span:nth-child(2) span {
        width: clamp(0%, v-bind(statStyles.defense), 100%);
    }

    p:nth-child(6) span:nth-child(2) span {
        width: clamp(0%, v-bind(statStyles.special_defense), 100%);
    }

    p:nth-child(7) span:nth-child(2) span {
        width: clamp(0%, v-bind(statStyles.speed), 100%);
    }

</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    stats: {
        type: Object,
        required: true
    }
})

const statStyles = computed(() => {
    return {
        hp: `${props.stats.hp}px`,
        attack: `${props.stats.attack}px`,
        special_attack: `${props.stats.special_attack}px`,
        defense: `${props.stats.defense}px`,
        special_defense: `${props.stats.special_defense}px`,
        speed: `${props.stats.speed}px`,
    }
})
</script>