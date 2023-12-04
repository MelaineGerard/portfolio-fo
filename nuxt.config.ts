// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    css: [
        '~/assets/css/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
        transpile: [
            "@fortawesome/vue-fontawesome"
        ],
    }
})
