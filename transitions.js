import gsap from 'gsap';
import ScrollToPlugin from 'gsap/scrollToPlugin';
if (process.client) {
    gsap.registerPlugin(ScrollToPlugin);
}
import { lineSplit, wordSplit } from '~/animations/Split';
import { wipeY } from '~/animations/Wipes';
import {
    enterTextAnimation,
    leaveTextAnimation,
    fadeOutUp,
    fadeInUp,
    skewOutUp,
    skewInUp,
} from '~/animations/AnimateText';

export const page = {
    name: 'page',
    mode: 'out-in',
    css: false,
    leave(el, done) {
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
            .to(window, { duration: 0.5, scrollTo: 0 })
            .add(leaveTextAnimation(heroTitle.chars))
            .add(skewOutUp(heroText.lines), '<')
            .add(wipeY('.hero__overlay', 'center bottom', 1), '-=1.3');
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
            .add(skewInUp(heroText.lines), '-=0.95')
            .add(wipeY('.hero__overlay', 'center top', 0), '-=1.2');
    },
};

export const fadeOut = {
    name: 'fadeOut',
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
