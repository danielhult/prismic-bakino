<template>
    <div>
        <Hero :hero="content" />
    </div>
</template>

<script>
import Hero from '~/components/Hero';

export default {
    name: 'frontpage',
    components: {
        Hero,
    },
    async asyncData({ $prismic, params, error }) {
        try {
            const document = await $prismic.api.getSingle('frontpage');

            return {
                content: document.data,
            };
        } catch (e) {
            error({ statusCode: 404, message: 'Something wrong happened!' });
        }
    },
};
</script>

<style lang="scss" scoped></style>
