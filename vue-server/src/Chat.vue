<template>
    <Navbar />
    <MessagesList />
    <MessageForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from './apiClient';
import MessageForm from './components/MessageForm.vue';
import MessagesList from './components/MessagesList.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
    name: 'ChatComponent',
    components: { Navbar, MessageForm, MessagesList },
    mounted() {
        apiClient
            .get('/api/user')
            .then(response => {
                sessionStorage.setItem('username', response.data.username);
            })
            .catch(error => {
                if (error.response.status === 401) {
                    location.href = '#login';
                }
            });
    }
});
</script>

<style>
main#root {
    display: grid;
    grid-template-rows: 34.4px calc(100vh - 34.4px - 54px) 54px;
}
</style>
