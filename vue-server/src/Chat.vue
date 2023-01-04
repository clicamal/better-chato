<template>
    <Navbar />
    <MessagesList />
    <MessageForm :api-client="apiClient"/>
</template>

<script lang="ts">
import { AxiosInstance } from 'axios';
import { defineComponent, PropType } from 'vue';
import MessageForm from './components/MessageForm.vue';
import MessagesList from './components/MessagesList.vue';
import Navbar from './components/Navbar.vue';
import socketClient from './socketClient';

export default defineComponent({
    name: 'ChatComponent',
    components: { Navbar, MessageForm, MessagesList },
    props: {
        apiClient: {
            type: Function as PropType<AxiosInstance>,
            required: true
        }
    },
    mounted() {
        this.apiClient
            .get('/api/user')
            .then(response => {
                socketClient.emit('user-joined', { username: response.data.username });
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
