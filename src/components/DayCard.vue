<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchWeather } from '../services/fetchWeather';
import type { WeatherResponse } from '../sources/interfaces';

const weather = ref<WeatherResponse | null>(null)

onMounted(async () => {
    weather.value = await fetchWeather()
})

</script>

<template>
  <p v-if="weather">{{ weather.current.temp_c }}°C</p>
</template>

<style scoped></style>