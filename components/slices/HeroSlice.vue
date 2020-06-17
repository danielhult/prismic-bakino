<template>
    <section class="hero">
        <img :src="slice.primary.background_image.url" alt="" />
        <div class="container">
            <div class="hero__content">
                <h1>{{ slice.primary.title[0].text }}</h1>
                <p>{{ slice.primary.sub_title[0].text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'hero-slice',
};
</script>

<style lang="scss">
.hero {
    height: 100vh;
    display: grid;
    place-items: center;
    color: white;

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
    }

    &__content {
        p {
            max-width: 80%;
            font-size: var(--paragraph--big);
        }
    }
}
</style>
