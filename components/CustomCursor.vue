<template>
    <div>
        <div class="circle"></div>
        <div class="circle-follower"></div>
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
    mounted() {
        const cursor = document.querySelector('.circle');
        const cursorFollower = document.querySelector('.circle-follower');

        function moveCircle(e) {
            gsap.to(cursor, {
                duration: 0.0016,
                ease: 'power3.inOut',
                x: e.clientX,
                y: e.clientY,
            });
            gsap.to(cursorFollower, {
                duration: 0.003,
                ease: 'power3.inOut',
                x: e.clientX,
                y: e.clientY,
            });
        }

        window.addEventListener('mousemove', moveCircle);
    },
};
</script>

<style lang="scss" scoped>
.circle {
    position: fixed;
    background-color: #fff;
    width: 10px;
    height: 10px;
    left: -10px;
    top: -10px;
    border-radius: 100%;
    z-index: 1;
    // user-select: none;
    // pointer-events: none;
    z-index: 10000;
    transform: scale(1);
    &.active {
        opacity: 1;
        transform: scale(0);
    }
}

.circle-follower {
    position: fixed;
    border: 1px solid #fff;
    width: 30px;
    height: 30px;
    left: -21px;
    top: -21px;
    border-radius: 100%;
    z-index: 1;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    transform: scale(1);
    &.active {
        transform: scale(3);
    }
}
</style>