// api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // Other common configuration options here
});

instance.interceptors.response.use(
    response => response.data,
    error => {
        console.error('API Error:', error);
        throw error;
    }
);

export default instance;
