<template>
    <header class="header">
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">
                        <svg class="logo" viewBox="0 0 64 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50%" cy="50%" r="32" fill="#C4C4C4" />
                        </svg>

                    </nuxt-link>
                </li>
                <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
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

    .logo {
        width: 3.2rem;

        circle {
            fill: var(--color-secondary);
        }
    }

    ul {
        display: flex;
        align-items: center;

        li {
            margin-right: 6.4rem;
        }
    }
}
</style>
