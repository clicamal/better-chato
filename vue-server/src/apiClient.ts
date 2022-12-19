import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${process.env.VUE_APP_LARAVEL_SERVER_HOST}:${process.env.VUE_APP_LARAVEL_SERVER_PORT}/`,
    timeout: 5000,
    withCredentials: true
});

export default apiClient;
