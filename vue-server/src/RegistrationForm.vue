<template>
    <form id="registration-form" class="pure-form authentication-form" @submit="register">
        <h3 id="registration-form-heading">Registration</h3>

        <input v-model="username" type="text" name="username" id="username-input" placeholder="Username">
        <input v-model="password" type="password" name="password" id="password-input" placeholder="Password">
        <button type="submit" class="pure-button pure-button-active">Register</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from './apiClient';

export default defineComponent({
    name: 'RegisterForm',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        register(event: Event) {
            event.preventDefault();

            const userData = {
                username: this.username,
                password: this.password
            };

            apiClient
                .get('/sanctum/csrf-cookie')
                .then(() => {
                    apiClient
                        .post('/api/register', userData)
                        .then(response => {
                            console.log(response.data.message);

                            apiClient
                                .post('/api/authenticate', userData)
                                .then(response => {
                                    console.log(response.data.message);
                                }).catch(error => {
                                    console.log(error);
                                });
                        }).catch(error => {
                            console.error(error)
                        });
                }).catch(error => {
                    console.error(error)
                });
        }
    }
});
</script>
