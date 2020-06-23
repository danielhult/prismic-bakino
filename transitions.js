import gsap from 'gsap';
import ScrollToPlugin from 'gsap/scrollToPlugin';
if (process.client) {
    gsap.registerPlugin(ScrollToPlugin);
}
import { lineSplit } from '~/animations/Split';
import { wipeY } from '~/animations/Wipes';
import {
    enterTextAnimation,
    leaveTextAnimation,
    fadeOutUp,
    fadeInUp,
} from '~/animations/AnimateText';

export const page = {
    name: 'page',
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
            onStart: () => {
                document.body.classList.add('body--overflow');
            },
            onComplete: () => {
                done();
            },
        });

        master
            .to(window, { duration: 1, scrollTo: 0 })
            .add(leaveTextAnimation(heroTitle.chars))
            .add(fadeOutUp(heroText.words), '-=0.9')
            .add(wipeY('.hero__overlay', 'center bottom', 1), '<');
    },
    enter(el, done) {
        const heroTitle = lineSplit('.hero__title');
        const heroText = lineSplit('.hero__text');
        const master = gsap.timeline({
            onComplete: () => {
                document.body.classList.remove('body--overflow');
                done();
            },
        });

        master
            .add(enterTextAnimation(heroTitle.chars))
            .add(fadeInUp(heroText.words), '-=0.9')
            .add(wipeY('.hero__overlay', 'center top', 0), '<');
    },
};

export const homepage = {
    name: 'homepage',
    mode: 'out-in',
    css: false,
    enter(el, done) {
        const tl = gsap.timeline({
            onComplete: done,
        });

        tl.from(el, {
            opacity: 0,
            y: 20,
        });
    },
    leave(el, done) {
        const tl = gsap.timeline({
            onComplete: done,
        });

        tl.to(el, {
            opacity: 0,
            y: 20,
        });
    },
};
