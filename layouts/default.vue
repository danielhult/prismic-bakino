<template>
    <div>
        <Menu />
        <nuxt />
    </div>
</template>

<script>
import Menu from '~/components/Menu';

export default {
    components: {
        Menu,
    },
    async middleware({ store, $prismic }) {
        await store.dispatch('fetchMenu', $prismic);
    },
};
</script>
