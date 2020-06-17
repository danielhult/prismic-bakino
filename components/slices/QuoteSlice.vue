<template>
    <blockquote class="quote">
        <div class="quote__content">
            <h2>“{{ slice.primary.quote[0].text }}”</h2>
            <p>- {{ slice.primary.name_of_the_author[0].text }}</p>
        </div>
    </blockquote>
</template>

<script>
export default {
    props: ['slice'],
    name: 'quote-slice',
};
</script>

<style lang="scss" scoped>
.quote {
    display: grid;
    place-items: center;
    background: white;
    color: black;
    @include section-spacing--huge;

    &__content {
        max-width: 50rem;
        margin: 0 auto;
        text-align: center;
    }
}
</style>
