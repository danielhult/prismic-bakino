<template>
    <div>
        <slices-block :slices="slices" />
    </div>
</template>

<script>
import { page, fadeOut } from '~/assets/animations/transitions';
import SlicesBlock from '~/components/SlicesBlock.vue';

export default {
    components: {
        SlicesBlock,
    },
    async asyncData({ $prismic, params, error }) {
        try {
            const page = (await $prismic.api.getByUID('page', params.slug))
                .data;

            return {
                document: page,
                slices: page.body,
            };
        } catch (e) {
            // Returns error page
            error({ statusCode: 404, message: 'Page not found' });
        }
    },

    transition(to, from) {
        if (to.path === '/') {
            return fadeOut;
        }
        return page;
    },
};
</script>

