<script setup lang="ts">
import { messages } from '../sources/messages';
interface Props {
    label: string;
}

defineProps<Props>()


</script>

<template>
    <p>{{ messages.labels.city }}</p>
    <p>{{ label}}</p>
</template>

<style scoped></style>