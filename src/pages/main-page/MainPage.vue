<script setup lang="ts">
import AddText from './components/AddText.vue';
import Navigator from './components/Navigator.vue';
import Statistics from './components/Statistics.vue';
import WeatherIndicator from './components/WeatherIndicator.vue';



</script>

<template>
    <section class="container">
        <Statistics />
        <WeatherIndicator />
        <AddText />
        <Navigator />
    </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 944px;
    height: 623px;
    border-radius: 25px;
    background: var(--bg-secondary);
}
</style>