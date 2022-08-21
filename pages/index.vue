<script setup lang="ts">
import { NuxtIcon, Button, IonPage } from '#components'
import { UserGetResponse } from '~/server/api/user/me.get'
import { ref, useIonRouter } from '#imports'

const router = useIonRouter()

const data = ref<UserGetResponse | null>()

async function whoami() {
  data.value = await $fetch('/api/user/me')
}

async function logout() {
  await $fetch('/api/user/sign-out')
  router.replace(location.pathname)
}
</script>

<template>
  <ion-page class="wrapper">
    i am a test page
    <nuxt-icon name="fishing-hook" />

    <Button @click="whoami"> whoami </Button>
    <div v-if="data" class="mt-8 text-cyan-300">
      {{ JSON.stringify(data, null, 2) }}
    </div>
    <Button @click="logout"> logout </Button>

    <NuxtLink to="/user/sign-in">
      <Button>
        goto login
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

  bg-gray-800
}
</style>
