<template>
    <form id="registration-form" class="pure-form authentication-form">
        <h3 id="registration-form-heading">Registration</h3>

        <input type="text" name="username" id="username-input" placeholder="Username">
        <input type="password" name="password" id="password-input" placeholder="Password">
        <button type="submit" class="pure-button pure-button-active">Register</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RegisterForm'
});
</script>
