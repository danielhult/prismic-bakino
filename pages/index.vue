<template>
    <div>
        <Hero :hero="content" />
        <slices-block :slices="slices" />
    </div>
</template>

<script>
import SlicesBlock from '~/components/SlicesBlock.vue';
import Hero from '~/components/Hero';
import { fadeOut } from '~/transitions';

export default {
    name: 'frontpage',
    components: {
        Hero,
        SlicesBlock,
    },
    async asyncData({ $prismic, params, error }) {
        try {
            const document = await $prismic.api.getSingle('frontpage');

            return {
                content: document.data,
                slices: document.data.body,
            };
        } catch (e) {
            error({ statusCode: 404, message: 'Something wrong happened!' });
        }
    },
    transition(to, from) {
        return fadeOut;
    },
};
</script>

<style lang="scss" scoped></style>
