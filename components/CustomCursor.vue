<template>
    <div></div>
</template>

<script>
import kursor from 'kursor';

export default {
    mounted() {
        if (process.client) {
            new kursor({
                type: 1,
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
