import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  nitro: {
    preset: 'aws-lambda'
  },
  buildModules: [
    '@pinia/nuxt',
  ],
  modules: [
    'nuxt-ionic',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
  ],
})
