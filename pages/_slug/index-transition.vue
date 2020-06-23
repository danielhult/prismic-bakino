<template>
    <div>
        <slices-block :slices="slices" />
    </div>
</template>

<script>
import gsap from 'gsap';
import transitions from '~/transitions';
import SlicesBlock from '~/components/SlicesBlock.vue';
import { lineSplit } from '~/animations/Split';
import { wipeY } from '~/animations/Wipes';
import {
    enterTextAnimation,
    leaveTextAnimation,
    fadeOutUp,
    fadeInUp,
} from '~/animations/AnimateText';

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

    transition: {
        mode: 'out-in',
        css: false,
        leave(el, done) {
            if ($nuxt.$route.path === '/') {
                gsap.timeline().to(el, {
                    autoAlpha: 0,
                    onComplete: done,
                });
            }

            const heroTitle = lineSplit('.hero__title');
            const heroText = lineSplit('.hero__text');
            const master = gsap.timeline({
                onComplete: done,
            });

            master
                .add(leaveTextAnimation(heroTitle.chars))
                .add(fadeOutUp(heroText.words), '-=0.9')
                .add(wipeY('.hero__overlay', 'center bottom', 1), '<');
        },
        enter(el, done) {
            const heroTitle = lineSplit('.hero__title');
            const heroText = lineSplit('.hero__text');
            const master = gsap.timeline({
                onComplete: done,
            });

            master
                .add(enterTextAnimation(heroTitle.chars))
                .add(fadeInUp(heroText.words), '-=0.9')
                .add(wipeY('.hero__overlay', 'center top', 0), '<');
        },
    },
};
</script>

<style lang="scss" scoped></style>
