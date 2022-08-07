<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  @apply
  inline-flex
  items-center
  py-2
  px-4
  border-white
  border-2
  rounded
  bg-gray-300
  bg-opacity-0
  transition
  hover:bg-opacity-20
  active:bg-opacity-10
  disabled:opacity-50
  disabled:hover:bg-opacity-0
  text-white
  font-bold
}
</style>
