<template>
    <main id="root">
        <Navbar />
        <MessagesList />
        <MessageForm />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageForm from './components/MessageForm.vue';
import MessagesList from './components/MessagesList.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
    name: 'App',
    components: { Navbar, MessageForm, MessagesList }
});
</script>

<style>
* {
    box-sizing: border-box;
}

main#root {
    --primary-color: #202020;
    --secondary-color: #424242;
    --tertiary-color: 	#e3e3e3;

    --primary-text-color: white;
    --tertiary-text-color: black;

    background-color: var(--secondary-color);
}
</style>
