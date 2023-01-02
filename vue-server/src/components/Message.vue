<template>
    <li class="message">
        <h4 ref="messageSenderUsername" class="message-sender-username">{{ data.sender_username }}</h4>
        <p class="message-content">{{ data.content }}</p>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import MessageDataInterface from '@/interfaces/MessageDataInterface';

export default defineComponent({
    name: 'MessageComponent',
    props: {
        data: {
            type: Object as PropType<MessageDataInterface>,
            required: true
        }
    }
});
</script>

<style scoped>
li.message {
    background-color: var(--primary-color);
    padding: 10px;
    margin-bottom: 10px;
    color: var(--primary-text-color);
    border-radius: 5px;
}

h4.message-sender-username {
    margin: 0px;
}

p.message-content {
    margin: 0px;
    margin-top: 10px;
    word-break: break-all;
}
</style>
