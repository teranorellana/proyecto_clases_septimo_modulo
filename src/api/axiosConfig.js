import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_API_KEY, 
        'Authorization': 'Bearer dasdasdas'
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});