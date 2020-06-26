<template>
    <div>
        <div class="intro-animation">
            <h1>Bakino</h1>
            <svg class="logo" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle-small" cx="50%" cy="43%" r="10" />
                <circle class="circle-big" cx="50%" cy="50%" r="32" />
            </svg>
        </div>
        <product-grid :products="products" />
    </div>
</template>

<script>
import gsap from 'gsap';
import ProductGrid from '~/components/ProductGrid';
import { PageIntro } from '~/assets/animations/PageIntro';
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
    mounted() {
        if (process.client) {
            const hasPlayed = sessionStorage.getItem('hasAnimationPlayed');
            const tl = gsap.timeline({
                onComplete: () => {
                    sessionStorage.setItem('hasAnimationPlayed', true);
                },
            });

            tl.add(PageIntro());

            if (!hasPlayed) {
                tl.play();
            } else {
            }
        }
    },
    transition(to, from) {
        return fadeOut;
    },
};
</script>

<style lang="scss">
.intro-animation {
    position: relative;
    display: grid;
    place-items: center;
    background: white;
    height: 100vh;
    z-index: 100000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);

    h1 {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, 0%);
        font-size: 3vw;
        opacity: 0;
        visibility: hidden;
    }

    .logo {
        width: 100%;
        height: 100%;

        circle {
            fill: var(--color-secondary);
        }
    }
}
</style>
