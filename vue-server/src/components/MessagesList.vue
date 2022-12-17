<template>
    <ul id="messages-list">
        <Message :data="{id: undefined, sender_username: 'username', content: 'Hello!'}" />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Message from './Message.vue';

export default defineComponent({
    name: 'MessagesList',
    components: { Message }
});
</script>

<style scoped>
ul#messages-list {
    margin: 0px;
    margin-top: 34.39px;
    padding: 10px;
    padding-bottom: 0px;
    padding-bottom: 54px;
    overflow-y: scroll;
    background-color: var(--secondary-color);
}
</style>
