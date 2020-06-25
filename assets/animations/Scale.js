import gsap from 'gsap';

export const scaleOut = el => {
    const tl = gsap.timeline();

    tl.from(el, {
        scale: 1.2,
        y: 80,
        duration: 1.2,
        ease: 'power3.inOut',
    });

    return tl;
};
