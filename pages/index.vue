<script setup lang="ts">
import { NuxtIcon, Button, IonPage } from '#components'
import { useFetch } from '#app'

const { data, pending, refresh, error } = await useFetch('/api/user/me')
</script>

<template>
  <ion-page class="wrapper">
    i am a test page
    <nuxt-icon name="fishing-hook" />

    <Button @click="refresh"> i am a button </Button>
    <div v-if="!pending" class="mt-8 text-cyan-300">
      {{ JSON.stringify(data, null, 2) }}
    </div>

    <NuxtLink to="/user/login">
      <Button>
        goto login with nuxt
      </Button>
    </NuxtLink>
  </ion-page>
</template>

<style scoped lang="scss">
.wrapper {
  @apply
  p-8
  flex
  flex-col
  justify-center
  items-center
}
</style>
