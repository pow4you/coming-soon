// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],

  extends: '@nuxt-themes/typography',

  content: {
    documentDriven: true
  },

  devtools: {
    enabled: true
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
