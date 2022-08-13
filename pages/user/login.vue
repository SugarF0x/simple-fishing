<script setup lang="ts">
import { ref } from '#imports'
import { Button, IonPage } from '#components'
import { $fetch } from 'ohmyfetch'
import { SignUpBody } from '~/server/api/user/sign-up.post'

const login = ref('')
const password = ref('')
const error = ref<any>(null)

function submit() {
  error.value = null
  $fetch('/api/user/sign-up', {
    method: 'POST',
    body: {
      name: login.value,
      password: password.value
    } as SignUpBody
  }).catch(e => { error.value = e.data.data })
}

</script>

<template>
  <ion-page class="wrapper">
    <div>i am a login page</div>

    <input v-model="login" placeholder="login" type="text">
    <input v-model="password" placeholder="password" type="text">

    <Button @click="submit" :disabled="!login || !password"> sign up </Button>

    <div v-if="error" class="error">{{ JSON.stringify(error, null, 2) }}</div>
  </ion-page>
</template>

<style scoped lang="scss">
.wrapper {
  input {
    @apply
    m-2
    p-2
  }

  @apply
  p-8
  flex
  flex-col
  justify-center
  items-center
}

.error {
  color: red;
}
</style>
