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
        height: .7rem;
        border-radius: 2rem;
    }

    span.stat.hp {
        width: v-bind(`${props.stats.hp / 2.5}%`);
    }

    span.stat.attack {
        width: v-bind(`${props.stats.attack / 2.5}%`);
    }

    span.stat.special_attack {
        width: v-bind(`${props.stats.special_attack / 2.5}%`);
    }

    span.stat.defense {
        width: v-bind(`${props.stats.defense / 2.5}%`);
    }

    span.stat.special_defense {
        width: v-bind(`${props.stats.special_defense / 2.5}%`);
    }

    span.stat.speed {
        width: v-bind(`${props.stats.speed / 2.5}%`);
    }

</style>

<script setup>

const props = defineProps({
    stats: {
        type: Object,
        required: true
    }
})

</script>