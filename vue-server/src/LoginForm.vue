<template>
    <Authentication heading="Login" @submit="login">
        <div class="pure-control-group">
            <input v-model="username" type="text" name="username" id="username-input" class="pure-input-1"
                placeholder="Username">
        </div>

        <div class="pure-control-group">
            <input v-model="password" type="password" name="password" id="password-input" class="pure-input-1"
                placeholder="Password">
        </div>

        <div class="pure-control-group">
            <input type="submit" class="pure-input-1 pure-button pure-button-active" value="Login">
        </div>

        <a href="#register" class="other-form-anchor">Don't you have an acount yet? Click here</a>
    </Authentication>
</template>

<script lang="ts">
import { AxiosInstance } from 'axios';
import { defineComponent, PropType } from 'vue';
import Authentication from './components/Authentication.vue';

export default defineComponent({
    name: "LoginForm",
    components: { Authentication },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    props: {
        apiClient: {
            type: Object as PropType<AxiosInstance>,
            required: true
        }
    },
    methods: {
        login(onAuthenticationRequestError: (reason: any) => PromiseLike<never>) {
            const userData = {
                username: this.username,
                password: this.password
            };

            this.apiClient
                .get("/sanctum/csrf-cookie")
                .then(() => {
                    this.apiClient
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
