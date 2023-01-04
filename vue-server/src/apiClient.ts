import axios from 'axios';

const apiClient = axios.create({
    baseURL: `${process.env.VUE_APP_LARAVEL_SERVER_HOST}:${process.env.VUE_APP_LARAVEL_SERVER_PORT}/`,
    timeout: 5000,
    withCredentials: true
});

apiClient.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
        location.href = '#login';
    }
});

export default apiClient;
