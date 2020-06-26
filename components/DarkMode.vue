<template>
    <button class="dark-mode-toggle">
        <svg class="dark-mode-svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path id="svg__sun" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#C4C4C4" />
        </svg>
    </button>
</template>

<script>
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
if (process.client) {
    gsap.registerPlugin(MorphSVGPlugin);
}

export default {
    mounted() {
        if (process.client) {
            const darkModeToggleMoon =
                'M6.5 10C6.5 15.5228 10 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10 0 6.5 4.47715 6.5 10Z';
            const darkModeToggle = document.querySelector('.dark-mode-toggle');
            const body = document.body;
            const mediaQueryDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            );

            const toggleAnimation = gsap
                .timeline({
                    paused: true,
                    defaults: {
                        ease: 'power3.inOut',
                        duration: 1,
                    },
                })
                .to('#svg__sun', {
                    morphSVG: darkModeToggleMoon,
                })
                .to(
                    '.dark-mode-svg',
                    {
                        transformOrigin: '50% 50%',
                        rotation: 180,
                    },
                    '<'
                );

            darkModeToggle.addEventListener('click', e => {
                body.classList.toggle('dark-mode');

                if (body.classList.contains('dark-mode')) {
                    toggleAnimation.play();
                } else {
                    toggleAnimation.reverse();
                }
            });

            const updateDarkMode = () => {
                if (mediaQueryDark.matches) {
                    body.classList.add('dark-mode');
                } else {
                    body.classList.remove('dark-mode');
                }
            };

            mediaQueryDark.addListener(() => {
                updateDarkMode();
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.dark-mode-toggle {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 9999999999;
    background: none;
    border: none;
    outline: none;

    &:hover path {
        fill: var(--color-secondary);
    }
    path {
        fill: var(--color-secondary);
        transition: 0.5s ease fill;
    }
}
</style>