<template>
    <form id="message-form" class="pure-form" @submit="sendMessage">
        <input ref="messageContent" v-model="messageContent" autocomplete="off" id="message-content" type="text"
            placeholder="Type your message here.">
        <button id="send-message" type="submit" class="pure-button pure-button-active">Send</button>
    </form>
</template>

<script lang="ts">
import apiClient from '@/apiClient';
import socketClient from '@/socketClient';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageForm',
    data() {
        return {
            messageContent: ''
        };
    },
    methods: {
        sendMessage(event: Event) {
            event.preventDefault();

            apiClient
                .get('/api/user')
                .then(response => {
                    const messageData = {
                        sender_username: response.data.username,
                        content: this.messageContent
                    };

                    socketClient.emit('new-message', messageData);

                    this.messageContent = '';
                    (this.$refs.messageContent as HTMLInputElement).focus();
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        location.href = '#login';
                    }
                });
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

input#message-content,
button#send-message {
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
    width: 69.38px;
}
</style>
