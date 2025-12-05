<script setup lang="ts">
import type { PostForm } from '../sources/interfaces';
import DeleteIcon from '../assets/delete.svg'
import EditIcon from '../assets/edit.svg'
import Button from './Button.vue';


const { post } = defineProps<{
  post: PostForm
}>()

const emits = defineEmits(['deletepost', 'editpost'])
const deletePost = (post: PostForm) => {
    emits('deletepost', post);
}
const editPost = (post: PostForm) => {
    emits('editpost', post)
}


</script>

<template>
    <div class="card">
        <p>{{ post.title }}</p>
        <p>{{ post.content }}</p>
        <Button @click="deletePost(post)" class="icon">
            <template #icon>
                <DeleteIcon class="icon" />
            </template></Button>
        <Button @click="editPost(post)" class="icon">
            <template #icon>
                <EditIcon class="icon" />
            </template></Button>
    </div>
</template>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
    background: none;
    border: none;

    &:hover {
        background: none;
        transform: scale(1.02);
    }
}</style>