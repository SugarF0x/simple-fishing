<script setup lang="ts">
import { NuxtIcon, Button } from '#components'
import { useFetch } from '#app'

const { data, pending } = await useFetch('/api/user/me')
</script>

<template>
  <div class="wrapper">
    i am a test page
    <nuxt-icon name="fishing-hook" />

    <Button @click="fetch"> i am a button </Button>
    <div v-if="!pending" class="mt-8 text-cyan-300">
      {{ JSON.stringify(data, null, 2) }}
    </div>
  </div>
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
