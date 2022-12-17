<template>
    <form id="message-form" class="pure-form">
        <input id="message-content" type="text" placeholder="Type your message here.">
        <button id="send-message" type="submit" class="pure-button pure-button-active">Send</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageForm'
});
</script>

<style scoped>
form#message-form {
    position: fixed;
    bottom: 0px;
    left: 0px;
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
