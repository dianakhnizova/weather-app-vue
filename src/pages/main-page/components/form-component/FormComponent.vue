<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { PostForm } from '../../../../sources/interfaces';

import { messages } from '../../../../sources/messages';
import Button from '../../../../components/Button.vue';
import PostItem from '../../../../components/PostItem.vue';

const posts = ref<PostForm[]>([])
const post = reactive<PostForm>({
    index: 0,
    title: '',
    content: ''
})
const editedPost = reactive<PostForm>({
    index: 0, 
    title: '',
    content: ''
})
const isPost = computed(() => posts.value.length > 0);
let isModalOpen = ref<boolean>(false);

const storePosts = () => {
    posts.value.unshift({ index: post.index, title: post.title, content: post.content });

    Object.assign(post, {
        index: 0,
        title: '',
        content: ''
    })
}

const deletePost = (post: PostForm) => {
    posts.value = posts.value.filter(postItem => postItem !== post);
}

const editPost = (post: PostForm) => {
    isModalOpen.value = true;

    Object.assign(editedPost, {
        index: posts.value.indexOf(post),
        title: post.title,
        content: post.content
    })
}

const updatePost = () => {
    const target = posts.value[editedPost.index];
    if (!target) return;

    Object.assign(target, {
        index: editedPost.index,
        title: editedPost.title,
        content: editedPost.content
    });

    isModalOpen.value = false;
    
}
</script>

<template>
    <div v-if="isModalOpen" class="overlay" @click="isModalOpen=false"></div>

    <div class="modal" v-if="isModalOpen">
        <div>
            <input v-model='editedPost.title' type="text" placeholder="Enter text">
        </div>
        <div>
            <textarea v-model="editedPost.content" placeholder="content"></textarea>
        </div>
        <Button @click="updatePost">{{ messages.button.update }}</Button>
    </div>

    <div>
        <div>
            <input v-model='post.title' type="text" placeholder="Enter text">
        </div>
        <div>
            <textarea v-model="post.content" placeholder="content"></textarea>
        </div>
        <Button @click="storePosts">{{ messages.button.add }}</Button>
    </div>

    <div v-show='isPost' class="listContainer">
        <PostItem v-for="post in posts" :post="post" @deletepost="deletePost" @editpost="editPost"/>
    </div>

</template>

<style scoped>
.listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    border: 1px solid var(--color-01);
    border-radius: 20px;
    padding: 10px 20px;
    gap: 20px;
    background: var(--bg-color-2);
}

.card {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--color-01);
    border: 1px solid var(--color-01);
    border-radius: 20px;
    padding: 10px 20px;
    background: var(--bg-card-1);

}

.modal {
    position: fixed;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 10px;

    background: var(--bg-card-1);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid var(--color-01);
}


.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
}
</style>
