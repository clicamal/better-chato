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
        socketClient.on('new-message', messageData => {
            this.messages.push(messageData);
        });
    },
    updated() {
        const messagesList = (this.$refs.messagesList as HTMLUListElement);
        const messagesListScrollHeight = messagesList.scrollHeight;
        const messagesListScrollTop = messagesList.scrollTop;

        if (messagesListScrollTop > messagesListScrollHeight / 3) {
            messagesList.scroll({ top: messagesListScrollHeight });
        }
    }
});
</script>

<style scoped>
ul#messages-list {
    margin: 0px;
    margin-top: 34.39px;
    padding: 10px;
    padding-bottom: 0px;
    height: calc(100vh - 88px);
    overflow-y: scroll;
    scroll-behavior: smooth;
    background-color: var(--secondary-color);
}
</style>
