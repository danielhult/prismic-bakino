export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Bakino',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: false,
    /*
     ** Global CSS
     */
    css: ['@/assets/styles/style.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/prismic',
        '@/modules/static',
        '@/modules/crawler',
        '@nuxtjs/style-resources',
    ],

    prismic: {
        endpoint: 'https://bakino.cdn.prismic.io/api/v2',
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer',
    },
    styleResources: {
        scss: ['@/assets/styles/style.scss'],
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // to transform link with <nuxt-link> for the htmlSerializer
            config.resolve.alias['vue'] = 'vue/dist/vue.common';
        },
        transpile: ['gsap'],
    },
    generate: {
        fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
    },
};
