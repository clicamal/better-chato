<template>
    <Navbar />
    <MessagesList />
    <MessageForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageForm from './components/MessageForm.vue';
import MessagesList from './components/MessagesList.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
    name: 'ChatComponent',
    components: { Navbar, MessageForm, MessagesList }
});
</script>

<style>
main#root {
    display: grid;
    grid-template-rows: 34.4px calc(100vh - 34.4px - 54px) 54px;
}
</style>
