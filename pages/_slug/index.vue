<template>
    <div>
        <slices-block :slices="slices" />
    </div>
</template>

<script>
import gsap from 'gsap';
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
    transition: {
        mode: 'out-in',
        css: false,
        leave(el, done) {
            const tl = gsap.timeline({
                onComplete: done,
                defaults: {
                    ease: 'power3.inOut',
                    duration: 0.8,
                },
            });

            tl.to(
                '.hero__content',
                {
                    y: 40,
                    autoAlpha: 0,
                },
                '<'
            ).to(
                '.hero img',
                {
                    autoAlpha: 0,
                },
                '<'
            );
        },
        enter(el, done) {
            const tl = gsap.timeline({
                onComplete: done,
                defaults: {
                    ease: 'power3.inOut',
                    duration: 0.8,
                },
            });

            tl.from(
                '.hero__content',
                {
                    y: 40,
                    autoAlpha: 0,
                },
                '<'
            ).from(
                '.hero img',
                {
                    autoAlpha: 0,
                },
                '<'
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>
