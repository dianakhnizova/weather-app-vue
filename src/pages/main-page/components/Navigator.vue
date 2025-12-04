<script setup lang="ts">
import Button from '../../../components/Button.vue';
import { messages } from '../../../sources/messages';
import LocationIcon from '../../../assets/Location.svg'

</script>

<template>
  <Button><template #icon>
    <LocationIcon class="icon"/>
    </template>{{ messages.button.save }}</Button>
</template>

<style scoped>
.icon {
  width: 33px;
  height: 33px;
}</style>
