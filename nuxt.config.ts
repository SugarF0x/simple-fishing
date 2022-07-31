import { defineNuxtConfig } from 'nuxt'

const isDev = process.env.NODE_ENV === 'development'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  nitro: {
    preset: isDev ? 'node-server' : 'aws-lambda'
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
