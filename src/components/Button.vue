<script setup lang="ts">
interface Props {
    onClick?: () => void;
    className?: string;
}

const props = defineProps<Props>()

</script>

<template>
    <button :class="props.className ? className : 'button'" @click="props.onClick">
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