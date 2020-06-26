<template>
    <div class="cursor"></div>
</template>

<script>
import gsap from 'gsap';

export default {
    mounted() {
        if (process.client) {
            let mouseIsDown = false;

            window.addEventListener('mousedown', e => {
                mouseIsDown = true;
                gsap.to('.cursor', {
                    duration: 0.2,
                    scale: 0.3,
                });
            });

            window.addEventListener('mouseup', e => {
                mouseIsDown = false;
                gsap.to('.cursor', {
                    duration: 0.2,
                    scale: 1,
                });
            });

            const customCursor = e => {
                gsap.to('.cursor', {
                    x: e.clientX,
                    y: e.clientY,
                });
            };

            const growMouse = e => {
                gsap.to('.cursor', {
                    scale: 1.5,
                });
            };

            const shrinkMouse = e => {
                gsap.to('.cursor', {
                    scale: 1,
                });
            };

            const buttons = document.querySelectorAll('button .btn');

            window.addEventListener('mousemove', e => customCursor(e));
            buttons.forEach(button => {
                button.addEventListener('mouseover', e => growMouse(e));
                button.addEventListener('mouseleave', e => shrinkMouse(e));
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.cursor {
    position: absolute;
    height: 20px;
    width: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    z-index: 9999999999;
    transform: translate(-50%, -50%);
    pointer-events: none;
}
</style>