<template>
    <form id="register-form" class="pure-form">
        <input type="text" name="username" id="username-input" placeholder="Username">
        <input type="password" name="password" id="password-input" placeholder="Password">
        <button type="submit">Register</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RegisterForm'
});
</script>

<style scoped>
form#register-form {
    background-color: var(--primary-color);
    margin: 25% 10px;
}
</style>
