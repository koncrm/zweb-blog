// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  nitro: {
    preset: 'service-worker'
  },
  extends: 'content-wind',
  router: {
    base: '/zweb-blog/'
  }
})
