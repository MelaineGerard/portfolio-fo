// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  css: [
      '~/assets/css/main.scss',
      '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  build: {
      transpile: [
          "@fortawesome/vue-fontawesome"
      ],
  },

  compatibilityDate: '2024-07-23'
})