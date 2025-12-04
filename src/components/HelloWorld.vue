<script setup lang="ts">
interface Props {
  message: string
}

defineProps<Props>()

</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style scoped>

</style>
