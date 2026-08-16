import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormularioEditar } from '../components/FormularioEditar';
import { obtenerAlumnoPorId } from '../services/alumnosService';
import { manejarError } from '../utils/manejarError';

export const PaginaEditarAlumno = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [alumno, setAlumno] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlumnoPorId = async () => {
            try {
                const res = await obtenerAlumnoPorId(id);

                setAlumno(res);
            } catch (error) {
                console.error('Error al obtener un alumno por su id: ', error);
            }
        };

        fetchAlumnoPorId();
    }, [id]);

    return (
        <FormularioEditar
            alumnoEditar={alumno}
            onGuardado={() => navigate('/')}
            onCancelar={() => navigate('/')}
        />
    );
};