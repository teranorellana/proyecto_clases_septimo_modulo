import {useState, useEffect} from 'react'
import { obtenerAlumnoPorId } from '../services/alumnosService';

export const DetalleAlumno = ({ idAlumno }) => {
    const [alumno, setAlumno] = useState(null);
    
    useEffect(() => {
        const fetchAlumnoPorId = async () => {
            try {
                const res = await obtenerAlumnoPorId(idAlumno);
                setAlumno(res);
            } catch (error) {
                console.error('Error al obtener el alumno por su id:', error);
            }
        };
        fetchAlumnoPorId();
    }, []); 
    return (
        <div>
            <h2>Detalle del Alumno</h2>
            <p>Nombre: {alumno?.nombre}</p>
        </div>
    )
};

