<script setup lang="ts">
import { NuxtIcon, Button, IonPage } from '#components'
import { useFetch } from '#app'
import { useIonRouter } from '#imports'

const router = useIonRouter()

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

    <Button @click="router.navigate('/user/login')">
      goto login
    </Button>
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
