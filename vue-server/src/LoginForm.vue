<template>
    <form id="login-form" class="pure-form authentication-form">
        <h3 id="login-form-heading">Login Form</h3>

        <input type="text" name="username" id="username-input" placeholder="Username">
        <input type="password" name="password" id="password-input" placeholder="Password">
        <button type="submit" class="pure-button pure-button-active">Login</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginForm'
});
</script>
