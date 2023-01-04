import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHashHistory } from 'vue-router';
import Chat from './Chat.vue';
import RegistrationForm from './RegistrationForm.vue';
import LoginForm from './LoginForm.vue';
import apiClient from './apiClient';

const routes = [
    { path: '/', component: Chat, props: { apiClient } },
    { path: '/register', component: RegistrationForm, props: { apiClient } },
    { path: '/login', component: LoginForm, props: { apiClient } }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp({});

app.use(router);
app.mount('#root');
