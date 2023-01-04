<template>
    <Authentication heading="Registration" @submit="register">
        <input v-model="username" type="text" name="username" id="username-input" class="pure-input-1"
            placeholder="Username">
        <input v-model="password" type="password" name="password" id="password-input" class="pure-input-1"
            placeholder="Password">
        <button type="submit" class="pure-input-1 pure-button pure-button-active">Register</button>

        <a href="#login" class="other-form-anchor">Do you already have an account? Click here</a>
    </Authentication>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from './apiClient';
import Authentication from './components/Authentication.vue';

export default defineComponent({
    name: "RegisterForm",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        register(onAuthenticationRequestError: (reason: any) => PromiseLike<never>) {

            const userData = {
                username: this.username,
                password: this.password
            };
            apiClient
                .get("/sanctum/csrf-cookie")
                .then(() => {
                    apiClient
                        .post("/api/register", userData)
                        .then(response => {
                            console.log(response.data.message);
                            apiClient
                                .post("/api/authenticate", userData)
                                .then(response => {
                                    console.log(response.data.message);

                                    location.hash = '/';
                                }).catch(onAuthenticationRequestError);
                        }).catch(onAuthenticationRequestError);
                }).catch(onAuthenticationRequestError);
        }
    },
    components: { Authentication }
});
</script>
