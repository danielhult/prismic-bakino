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

export default {
    props: ['products'],
    mounted() {
        const products = document.querySelectorAll('.product-grid__product');

        products.forEach(product => {
            const background = product.querySelector(
                '.product__title__background'
            );
            const text = product.querySelector(
                '.product__title__background h2'
            );

            const tl = gsap.timeline({ paused: true });

            tl.timeScale(1.5);

            tl.to(background, {
                transformOrigin: 'bottom center',
                scaleY: 1,
            }).fromTo(
                text,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 1,
                },
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
            background-color: white;
            padding: 1vw;
            display: grid;
            place-items: center;
            transform: scaleY(0);
        }

        h2 {
            position: relative;
            z-index: 2;
            margin-bottom: 0;
            opacity: 0;
        }
    }

    &__product {
        position: relative;
        display: grid;
        place-items: center;
        flex: 1;
        transition: 0.3s ease flex, 0.3s ease opacity;
        opacity: 0.6;
        cursor: pointer;

        img {
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }

        &:hover {
            flex: 1.3;
            opacity: 1;
        }
    }
}
</style>