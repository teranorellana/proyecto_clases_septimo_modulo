import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // <-- Ahora lee la URL desde el .env
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_API_KEY // <-- Ahora lee la clave desde el .env
    },
});