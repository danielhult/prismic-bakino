<template>
    <section class="hero">
        <img :src="hero.featured_image.url" />
        <div class="container container--big">
            <div class="hero__content">
                <h1 class="hero__title">{{ hero.title[0].text }}</h1>
                <p class="hero__text">{{ hero.sub_title[0].text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['hero'],
    name: 'hero',
};
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    height: 100vh;
    display: grid;
    place-items: center;

    background-size: cover;
    color: var(--color-white);

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
    }

    &__title {
        overflow: visible;
        height: auto;
        opacity: 1;
        pointer-events: auto;
        text-transform: uppercase;
    }

    &__content {
        p {
            max-width: 80%;
            font-size: var(--paragraph--big);
        }
    }
}
</style>
