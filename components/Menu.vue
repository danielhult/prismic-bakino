<template>
    <header class="header">
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li
                    v-for="menuLink in $store.state.menu.menu_links"
                    :key="menuLink.id"
                >
                    <nuxt-link :to="menuLink.link.uid">{{
                        $prismic.asText(menuLink.link_label)
                    }}</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    padding: 2vw 5vw;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;

    ul {
        display: flex;
        align-items: center;

        li {
            margin-right: 6.4rem;
        }
    }
}
</style>
