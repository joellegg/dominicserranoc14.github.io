<template>
    <div class="nav-bar-container">
        <router-link to="/">Dominic Serrano</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
}
</script>

<style lang="scss" scoped>
.nav-bar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;

    a {
        text-decoration: none;
        color: black;

        &:hover {
            color: blue;
        }
    }
}
</style>
