import gsap from 'gsap';

export const PageIntro = () => {
    const tl = new gsap.timeline();

    gsap.set('.circle-big', {
        scale: 6,
        transformOrigin: 'center',
    });
    gsap.set('.circle-small', { y: 60 });
    gsap.set('.intro-animation h1', { y: 60 });

    tl.to('.circle-big', {
        scale: 1,
        delay: 0.5,
        duration: 1,
        ease: 'power3.inOut',
    })
        .to('.circle-small', {
            duration: 2.5,
            y: 0,
            ease: 'elastic.out(1.5, 0.3)',
        })
        .to(
            '.circle-small',
            {
                duration: 2,
                rotation: 180,
                transformOrigin: '50% 70px',
            },
            '-=1'
        )
        .to(
            '.intro-animation h1',
            {
                autoAlpha: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.inOut',
            },
            '-=1.5'
        )
        .to('.intro-animation', {
            duration: 1,
            yPercent: -100,
            ease: 'power3.inOut',
        });

    return tl;
};
