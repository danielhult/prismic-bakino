<template>
    <div>
        <Menu />
        <dark-mode />
        <nuxt />
    </div>
</template>

<script>
import Menu from '~/components/Menu';
import DarkMode from '~/components/DarkMode';

export default {
    components: {
        Menu,
        DarkMode,
    },
    async middleware({ store, $prismic }) {
        await store.dispatch('fetchMenu', $prismic);
    },
};
</script>
