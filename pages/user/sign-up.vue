<script setup lang="ts">
import { ref } from '#imports'
import { Button, IonPage } from '#components'
import { $fetch } from 'ohmyfetch'
import { useIonRouter } from '@ionic/vue'
import { UserData } from '~/server/types'

const router = useIonRouter()

const login = ref('')
const password = ref('')
const error = ref<any>(null)

async function submit() {
  error.value = null

  const isSuccess = await $fetch('/api/user/sign-up', {
    method: 'POST',
    body: {
      login: login.value,
      password: password.value
    } as UserData
  }).catch(e => { error.value = e.data.data })

  if (isSuccess) router.push('/')
}
</script>

<template>
  <ion-page class="wrapper">
    <div>i am a sign up page</div>

    <input v-model="login" placeholder="login" type="text">
    <input v-model="password" placeholder="password" type="text">

    <Button @click="submit" :disabled="!login || !password"> sign up </Button>

    <div v-if="error" class="error">{{ JSON.stringify(error, null, 2) }}</div>

    <div> already have an account? </div>

    <NuxtLink to="/user/sign-in" replace>
      <Button>
        goto sign in
      </Button>
    </NuxtLink>
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

  bg-gray-800
}

.error {
  color: red;
}
</style>
