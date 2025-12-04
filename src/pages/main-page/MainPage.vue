<script setup lang="ts">
import Navigator from './components/Navigator.vue';
import Statistics from './components/Statistics.vue';
import WeatherIndicator from './components/WeatherIndicator.vue';



</script>

<template>
    <section class="container">
        <Statistics />
        <WeatherIndicator />
        <Navigator />
    </section>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 944px;
    height: 623px;
    border-radius: 25px;
    background: var(--bg-secondary);
}

</style>