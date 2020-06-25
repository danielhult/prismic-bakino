import gsap from 'gsap';

gsap.defaults({
    duration: 1,
    ease: 'power3.inOut',
});

export const enterTextAnimation = text => {
    const tl = gsap.timeline();

    tl.fromTo(
        text,
        {
            y: '100%',
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.014,
        }
    );

    return tl;
};

export const leaveTextAnimation = text => {
    const tl = gsap.timeline();

    tl.to(text, {
        y: '-100%',
        opacity: 0,
        stagger: 0.014,
    });

    return tl;
};

export const skewOutUp = element => {
    const tl = gsap.timeline();

    tl.to(element, {
        y: -60,
        opacity: 0,
        skewY: 2,
    });

    return tl;
};

export const skewInUp = element => {
    const tl = gsap.timeline();

    tl.from(element, {
        y: 60,
        opacity: 0,
        skewY: 2,
    });

    return tl;
};

export const fadeOutUp = element => {
    const tl = gsap.timeline();

    tl.to(element, {
        y: -40,
        opacity: 0,
    });

    return tl;
};

export const fadeOutDown = element => {
    const tl = gsap.timeline();

    tl.to(element, {
        y: 40,
        opacity: 0,
    });

    return tl;
};

export const fadeInUp = element => {
    const tl = gsap.timeline();

    tl.from(element, {
        y: 40,
        opacity: 0,
    });

    return tl;
};

export const fadeInDown = element => {
    const tl = gsap.timeline();

    tl.from(element, {
        y: -40,
        opacity: 0,
    });

    return tl;
};
