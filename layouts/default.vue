<template>
    <div>
        <Menu />
        <custom-cursor />
        <dark-mode />
        <nuxt />
    </div>
</template>

<script>
import Menu from '~/components/Menu';
import DarkMode from '~/components/DarkMode';
import CustomCursor from '~/components/CustomCursor';

export default {
    components: {
        Menu,
        DarkMode,
        CustomCursor,
    },
    async middleware({ store, $prismic }) {
        await store.dispatch('fetchMenu', $prismic);
    },
};
</script>

