<template>
    <form id="message-form" class="pure-form" @submit="sendMessage">
        <input v-model="messageContent" id="message-content" type="text" placeholder="Type your message here.">
        <button id="send-message" type="submit" class="pure-button pure-button-active">Send</button>
    </form>
</template>

<script lang="ts">
import socketClient from '@/socketClient';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageForm',
    data() {
        return {
            messageSenderUsername: 'username',
            messageContent: ''
        };
    },
    methods: {
        sendMessage(event: Event) {
            event.preventDefault();

            const messageData = {
                sender_username: this.messageSenderUsername,
                content: this.messageContent
            };

            socketClient.emit('new-message', messageData);

            this.messageContent = '';
        }
    }
});
</script>

<style scoped>
form#message-form {
    width: 100%;
    background-color: var(--primary-color);
    padding: 10px;
    box-shadow: 0px 0px 7px 0px black;
}

input#message-content, button#send-message {
    display: inline;
    margin: 0px;
    height: 34px;
}

input#message-content {
    width: calc(100% - 69.38px);
    border-radius: 5px 0px 0px 5px;
}

button#send-message {
    border-radius: 0px 5px 5px 0px;
    background-color: var(--tertiary-color) !important;
    color: var(--tertiary-text-color);
}
</style>
