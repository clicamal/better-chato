<template>
    <Authentication heading="Login" @submit="login">
        <input v-model="username" type="text" name="username" id="username-input" class="pure-input-1"
            placeholder="Username">
        <input v-model="password" type="password" name="password" id="password-input" class="pure-input-1"
            placeholder="Password">
        <button type="submit" class="pure-input-1 pure-button pure-button-active">Login</button>

        <a href="#register" class="other-form-anchor">Don't you have an acount yet? Click here</a>
    </Authentication>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from './apiClient';
import Authentication from './components/authentication/Authentication.vue';

export default defineComponent({
    name: "LoginForm",
    components: { Authentication },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(onAuthenticationRequestError: (reason: any) => PromiseLike<never>) {
            const userData = {
                username: this.username,
                password: this.password
            };

            apiClient
                .get("/sanctum/csrf-cookie")
                .then(() => {
                    apiClient
                        .post('/api/authenticate', userData)
                        .then(response => {
                            console.log(response.data.message);

                            location.hash = '/';
                        })
                        .catch(onAuthenticationRequestError);
                }).catch(onAuthenticationRequestError);
        }
    }
});
</script>
