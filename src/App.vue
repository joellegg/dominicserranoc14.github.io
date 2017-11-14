<template>
    <div id="app">
        <nav-bar></nav-bar>

        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'app',

    components: {
        NavBar,
    },
}
</script>

<style lang="scss">
html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    background: lighten(lightgray, 5%);
    color: darken(darkgray, 15%);
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
