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
  runtimeConfig: {
    mongoUrl: process.env.NUXT_MONGO_URL ?? 'mongodb://localhost:27017',
    mongoName: process.env.NUXT_MONGO_NAME ?? 'simple-fishing'
  }
})
