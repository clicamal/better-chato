<template>
    <main id="root">
        <Navbar />
        <div id="interaction">
            <MessagesList />
            <MessageForm />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageForm from './components/MessageForm.vue';
import MessagesList from './components/MessagesList.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
    name: 'App',
    components: { Navbar, MessageForm, MessagesList },
    mounted() {
        if (sessionStorage.getItem('username') === null) {
            const username = (prompt('Type your username:') as string);
            sessionStorage.setItem('username', username);
            location.reload();
        }
    }
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

div#interaction {
    display: grid;
    grid-template-rows: calc(100% - 54px) 54px;
    height: calc(100vh - 34.49px);
    margin-top: 34.39px;
}
</style>
