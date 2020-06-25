<template>
    <div>
        <Menu />
        <nuxt />
    </div>
</template>

<script>
import Menu from '~/components/Menu';
import CustomCursor from '~/components/CustomCursor';

export default {
    components: {
        Menu,
        CustomCursor,
    },
    async middleware({ store, $prismic }) {
        await store.dispatch('fetchMenu', $prismic);
    },
};
</script>
