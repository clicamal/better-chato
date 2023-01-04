<template>
    <ul ref="messagesList" id="messages-list">
        <Message v-for="(messageData, index) in messages" :data="messageData" :key="index" />
    </ul>
</template>

<script lang="ts">
import MessageDataInterface from '@/interfaces/MessageDataInterface';
import { Socket } from 'socket.io-client';
import { defineComponent, PropType } from 'vue';
import Message from './Message.vue';

export default defineComponent({
    name: 'MessagesList',
    components: { Message },
    data() {
        return {
            messages: [] as MessageDataInterface[]
        }
    },
    props: {
        socketClient: {
            type: Object as PropType<Socket>,
            required: true
        }
    },
    mounted() {
        this.socketClient.on('user-joined', userData => {
            this.messages.push({
                content: `${userData.username} has joined the chat.`
            });
        });

        this.socketClient.on('new-message', messageData => {
            this.messages.push(messageData);
        });
    },
    updated() {
        const messagesList = (this.$refs.messagesList as HTMLUListElement);
        const messagesListScrollHeight = messagesList.scrollHeight;
        const messagesListScrollTop = messagesList.scrollTop;
        const scrollDownBreakPoint = messagesListScrollHeight / 3;

        if (messagesListScrollTop > scrollDownBreakPoint) {
            messagesList.scroll({ top: messagesListScrollHeight });
        }
    }
});
</script>

<style scoped>
ul#messages-list {
    margin: 0px;
    padding: 10px;
    padding-bottom: 0px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    background-color: var(--secondary-color);
    list-style: none;
}
</style>
