<script setup lang="ts">


</script>

<template>
    <button class="button">
        <div>
            <slot name="icon" />
        </div>
        <slot />
    </button>
</template>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    width: 415px;
    height: 53px;
    background: var(--button-background);
    border-radius: 10px;
    font-size: 20px;
    color: var(--color-01);
    cursor: pointer;

    &:hover {
        background: var(--button-invert-background);
    }
}
</style>