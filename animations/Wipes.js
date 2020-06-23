import gsap from 'gsap';

export const wipeY = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.to(el, {
        duration: 1,
        ease: 'power3.inOut',
        scaleY: value,
        transformOrigin: origin,
    });

    return tl;
};

export const wipeX = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.to(el, {
        duration: 1,
        ease: 'power3.inOut',
        scaleX: value,
        transformOrigin: origin,
    });

    return tl;
};
