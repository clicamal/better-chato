<template>
    <Navbar />
    <MessagesList :socket-client="socketClient"/>
    <MessageForm :api-client="apiClient" :socket-client="socketClient"/>
</template>

<script lang="ts">
import { AxiosInstance } from 'axios';
import { Socket } from 'socket.io-client';
import { defineComponent, PropType } from 'vue';
import MessageForm from './components/MessageForm.vue';
import MessagesList from './components/MessagesList.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
    name: 'ChatComponent',
    components: { Navbar, MessageForm, MessagesList },
    props: {
        apiClient: {
            type: Function as PropType<AxiosInstance>,
            required: true
        },
        socketClient: {
            type: Object as PropType<Socket>,
            required: true
        }
    },
    mounted() {
        this.apiClient
            .get('/api/user')
            .then(response => {
                this.socketClient.emit('user-joined', { username: response.data.username });
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
