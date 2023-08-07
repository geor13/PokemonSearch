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
            <p>
                <span>HP</span>
                <span><span class="stat hp"></span></span>
                <span>{{ pokemon.hp }}</span>
            </p>
            <p>
                <span>ATK</span>
                <span><span class="stat attack"></span></span>
                <span>{{ pokemon.attack }}</span>
            </p>
            <p>
                <span>SP ATK</span>
                <span><span class="stat special_attack"></span></span>
                <span>{{ pokemon.special_attack }}</span>
            </p>
            <p>
                <span>DEF</span>
                <span><span class="stat defense"></span></span>
                <span>{{ pokemon.defense }}</span>
            </p>
            <p>
                <span>SP DEF</span>
                <span><span class="stat special_defense"></span></span>
                <span>{{ pokemon.special_defense }}</span>
            </p>
            <p>
                <span>SPD</span>
                <span><span class="stat speed"></span></span>
                <span>{{ pokemon.speed }}</span>
            </p>
        </div>
    </article>
</template>

<script setup>
    const props = defineProps({
        pokemon: {
            type: Object,
            required: true
        }
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

div p {
    font-size: .8rem;
    display: grid;
    gap: .5rem;
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
}

div p :nth-child(1) {
    font-weight: bold;
    font-size: 1rem;
}

div p :nth-child(2) span {
    display: block;
    height: .5rem;
    border-radius: 2rem;
}

div p:nth-child(2) span:nth-child(2) span {
    width: clamp(0%, v-bind(stats.hp), 100%);
}

div p:nth-child(3) span:nth-child(2) span {
    width: clamp(0%, v-bind(stats.attack), 100%);
}

div p:nth-child(4) span:nth-child(2) span {
    width: clamp(0%, v-bind(stats.special_attack), 100%);
}

div p:nth-child(5) span:nth-child(2) span {
    width: clamp(0%, v-bind(stats.defense), 100%);
}

div p:nth-child(6) span:nth-child(2) span {
    width: clamp(0%, v-bind(stats.special_defense), 100%);
}

div p:nth-child(7) span:nth-child(2) span {
    width: clamp(0%, v-bind(stats.speed), 100%);
}

</style>