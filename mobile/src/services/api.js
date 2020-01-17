import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.151.80:3333',
});

export default api;