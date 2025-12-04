<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const handle = () => {
  console.log('click')
}
</script>

<template>
  <HelloWorld message="Hello world" />
  <button class="btn" @click="handle">start</button>
</template>

<style scoped>
.btn {
  width: 200px;
  height: 100px;
  background-color: blue;
  cursor: pointer;

  &:hover {
    background-color: yellow;
  }
}
</style>
