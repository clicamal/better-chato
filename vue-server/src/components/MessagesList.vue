<template>
    <ul ref="messagesList" id="messages-list">
        <Message v-for="(messageData, index) in messages" :data="messageData" :key="index" />
    </ul>
</template>

<script lang="ts">
import MessageDataInterface from '@/interfaces/MessageDataInterface';
import socketClient from '@/socketClient';
import { defineComponent } from 'vue';
import Message from './Message.vue';

export default defineComponent({
    name: 'MessagesList',
    components: { Message },
    data() {
        return {
            messages: [] as MessageDataInterface[]
        }
    },
    mounted() {
        socketClient.on('user-joined', userData => {
            this.messages.push({
                sender_username: '',
                content: `${userData.username} has joned the chat.`
            });
        });

        socketClient.on('new-message', messageData => {
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
