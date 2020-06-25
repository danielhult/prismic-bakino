<template>
    <div>
        <product-grid :products="products" />
    </div>
</template>

<script>
import ProductGrid from '~/components/ProductGrid';
import { fadeOut } from '~/assets/animations/transitions';

export default {
    name: 'frontpage',
    components: {
        ProductGrid,
    },
    async asyncData({ $prismic, params, error }) {
        try {
            const products = await $prismic.api.query(
                $prismic.predicates.at('document.type', 'page')
            );

            return {
                products: products.results,
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
