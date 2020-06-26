<template>
    <section class="rich-text">
        <div class="container">
            <prismic-rich-text :field="slice.primary.text" />
        </div>
    </section>
</template>

<script>
export default {
    props: ['slice'],
    name: 'text-slice',
};
</script>

<style lang="scss" scoped>
.rich-text {
    background: var(--color-light-background);
    color: var(--color-text-dark);
    @include section-spacing--huge;
}
</style>
