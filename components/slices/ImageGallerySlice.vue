<template>
    <div class="image-gallery__section">
        <div class="container">
            <div class="image-gallery">
                <prismic-image v-for="(image, index) in slice.items" :key="'image' + index" :class="index % 2 == 0 ? 'big' : 'small'" :field="image.gallery_image.Mobile" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['slice'],
    name: 'image-gallery-slice',
};
</script>

<style lang="scss" scoped>
.image-gallery {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

    grid-auto-flow: dense;

    &__section {
        @include section-spacing--huge;
    }

    .big {
        grid-row: span 3;
        grid-column: span 2;

        &:nth-of-type(1) {
            transform: translateX(-20%);
        }
    }

    .small {
        grid-column: span 2;
        grid-row: span 4;

        &:nth-of-type(2) {
            transform: translateY(-10%);
        }

        &:nth-of-type(4) {
            transform: translate(20%, 20%);
        }
    }
}
</style>
