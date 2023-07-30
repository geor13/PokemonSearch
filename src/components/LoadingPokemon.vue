<template>
    <h2>Loading pokemon ...</h2>
    <img src="../assets/pokeball.png" width="260" height="260"/>
</template>

<script setup>

</script>

<style scoped>
    h2 {
        text-align: center;
    }
    img {
        display: block;
        margin: 0 auto;
        aspect-ratio: 1 / 1;
        width: 260px;
        animation: loading 1.5s ease-in-out 0s infinite;
    }

    @keyframes loading {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }
</style>