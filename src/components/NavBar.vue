<template>
    <div class="nav-bar-container">
        <div class="brand">
            <router-link to="/">Dominic Serrano</router-link>
        </div>

        <!-- <div class="link-container">
            <router-link to="/">About</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
        </div> -->

        <div class="contact-container">
            <a href="#">L</a>
            <a href="#">T</a>
            <a href="#">E</a>
        </div>
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
    padding: 20px 0 20px 20px;

    a {
        text-decoration: none;
        color: black;
        font-size: 20px;

        &:hover {
            color: white;
        }
    }
}

.brand {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 2;
}

.link-container, .contact-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
}

// Media queries
@media (max-width: 750px) {
    .nav-bar-container {
        flex-direction: column;
        justify-content: space-between;
    }

    .brand {
        justify-content: center;
    }

    .link-container {
        margin-top: 15px;
        order: 2;
    }

    .contact-container {
        margin-top: 15px;
        order: 1;
    }
}
</style>
