import gsap from 'gsap';

gsap.defaults({
    duration: 1,
    ease: 'power3.inOut',
});

export const wipeY = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.to(el, {
        scaleY: value,
        transformOrigin: origin,
        force3D: true,
    });

    return tl;
};

export const wipeFromY = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.from(el, {
        scaleY: value,
        transformOrigin: origin,
        force3D: true,
    });

    return tl;
};

export const wipeX = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.to(el, {
        scaleX: value,
        transformOrigin: origin,
        force3D: true,
    });

    return tl;
};
