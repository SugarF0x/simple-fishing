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
    authTokenKey: process.env.AUTH_TOKEN_KEY ?? 'simple-fishing-default-auth-token-key'
  }
})
