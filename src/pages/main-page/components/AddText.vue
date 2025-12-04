<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { PostForm } from '../../../sources/interfaces';
import Button from '../../../components/Button.vue';
import { messages } from '../../../sources/messages';

const posts = ref<PostForm[]>([])
const post = reactive<PostForm>({
    title: '',
    content: ''
})

const storePosts = () => {
    posts.value.unshift({ title: post.title, content: post.content });

    Object.assign(post, {
        title: '',
        content: ''
    })
}
</script>

<template>
    <div>
        <div>
            <input v-model='post.title' type="text" placeholder="Enter text">
        </div>
        <div>
            <textarea v-model="post.content" placeholder="content"></textarea>
        </div>
        <Button @click="storePosts">{{ messages.button.add }}</Button>
    </div>

    <div>
        <div v-for="post in posts">
            <p>{{ post.title }}</p>
            <p>{{ post.content }}</p>
        </div>
    </div>

</template>

<style scoped></style>
