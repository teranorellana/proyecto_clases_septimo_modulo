import { api } from '../api/axiosConfig.js';

export const obtenerAlumnos = async () => {
    const response = await api.get('/alumnos')
    return response.data;
};

export const obtenerAlumnoPorId = async (id) => {
    const response = await api.get(`/alumnos/${id}`);
    return response.data;
};