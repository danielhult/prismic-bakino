<template>
    <section class="hero">
        <div class="hero__left">
            <div class="hero__content">
                <h1 class="hero__title">{{ slice.primary.title[0].text }}</h1>
                <p class="hero__text">{{ slice.primary.sub_title[0].text }}</p>
            </div>
        </div>
        <div class="hero__right">
            <div class="hero__overlay"></div>
            <img :src="slice.primary.background_image.url" alt="" />
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'hero-slice',
};
</script>

<style lang="scss" scoped>
.hero {
    height: 100vh;
    display: flex;

    > * {
        height: 100%;
        width: 50%;
    }

    &__left {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 2vw 5vw;
    }

    &__right {
        position: relative;

        img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: -1;
        }
    }

    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--color-secondary);
        transform: scaleY(1);
        will-change: transform;
    }

    &__title {
        .split-parent {
            word-spacing: 1vw;
            line-height: 1;
            overflow: hidden;
            flex: none;
        }
    }
}
</style>
