<template>
    <h2>
        Loading pokemon
        <span>.</span>
        <span>.</span>
        <span>.</span>
    </h2>
    <img src="../assets/pokeball.png" width="200"/>
</template>

<script setup>

</script>

<style scoped>
    h2 {
        text-align: center;
    }

    h2 span:nth-child(1) {
        animation: dot-loading .8s linear 0s infinite alternate;
    }

    h2 span:nth-child(2) {
        animation: dot-loading .8s linear .5s infinite alternate;
    }

    h2 span:nth-child(3) {
        animation: dot-loading .8s linear 1s infinite alternate;
    }

    img {
        display: block;
        margin: 0 auto;
        aspect-ratio: 1 / 1;
        width: 200px;
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

    @keyframes dot-loading {
        from {
            opacity: 0;
        }
        to {
            opacity: 100;
        }
    }
</style>