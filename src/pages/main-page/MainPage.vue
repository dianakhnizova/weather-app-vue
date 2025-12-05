<script setup lang="ts">
import FormComponent from './components/form-component/FormComponent.vue';


</script>

<template>
    <section class="container">
        <FormComponent />
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