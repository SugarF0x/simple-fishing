<script setup lang="ts">
import { NuxtIcon, Button } from '#components'
</script>

<template>
  <div class="wrapper">
    i am a test page
    <nuxt-icon name="fishing-hook" />

    <Button> i am a button </Button>
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
