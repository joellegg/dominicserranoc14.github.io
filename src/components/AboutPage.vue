<template>
    <div class="about-container">
        <h2>I'm Dominic, a fullstack web developer</h2>

        <h3>Check out some of my
            <span @click="scrollIntoView('projects')" class="link">work</span>
        </h3>

        <div id="projects">
            Projects comp goes here
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        scrollIntoView(id) {
            document.querySelector(`#${id}`).scrollIntoView({
                behavior: 'smooth',
            });
        },
    },
}
</script>

<style lang="scss" scoped>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: auto;
}

.link {
    cursor: pointer;
    text-decoration: underline;
}

.space {
    height: 1000px;
}
</style>
