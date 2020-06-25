<template>
    <div>
        <section class="product-grid">
            <nuxt-link :to="product.uid" class="product-grid__product" v-for="(product, index) in products" :key="index">
                <div class="product__title">
                    <div class="product__title__background">
                        <h2>{{product.data.body[0].primary.title[0].text}}</h2>
                    </div>
                </div>
                <img :src="product.data.body[0].primary.background_image.url" alt="">
            </nuxt-link>
        </section>
    </div>
</template>

<script>
import gsap from 'gsap';
import { enterTextAnimation } from '../assets/animations/AnimateText';
import { lineSplit } from '../assets/animations/Split';

export default {
    props: ['products'],
    mounted() {
        const products = document.querySelectorAll('.product-grid__product');

        products.forEach(product => {
            const image = product.querySelector('img');
            const background = product.querySelector(
                '.product__title__background'
            );
            const text = product.querySelector(
                '.product__title__background h2'
            );
            const lines = lineSplit(text);

            const tl = gsap.timeline({ paused: true });
            tl.add(enterTextAnimation(lines.chars).duration(1)).to(
                image,
                { scale: 1.05 },
                '<'
            );

            product.addEventListener('mouseover', e => {
                tl.play();
            });

            product.addEventListener('mouseleave', e => {
                tl.reverse();
            });
        });
    },
};
</script>

<style lang="scss" scoped>
.product-grid {
    display: flex;
    height: 100vh;

    .product__title {
        position: relative;
        z-index: 2;

        &__background {
            padding: 1vw;
            display: grid;
            place-items: center;
            width: 100%;
        }

        h2 {
            position: relative;
            z-index: 2;
            margin-bottom: 0;
        }
    }

    &__product {
        position: relative;
        display: grid;
        place-items: center;
        flex: 1;
        transition: flex 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86),
            1s ease opacity;
        opacity: 0.6;
        cursor: pointer;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        &:hover {
            flex: 1.2;
            opacity: 1;
        }
    }
}
</style>