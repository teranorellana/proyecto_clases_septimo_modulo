import { useState, useEffect } from 'react';
import { TarjetaAlumno } from './TarjetaAlumno';
import { obtenerAlumnos } from '../services/alumnosService.js';

export const ListaAlumnos = ({ onSeleccionarAlumno, onEditar, recargar }) => {
    const [alumnos, setAlumnos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [gradoFiltro, setGradoFiltro] = useState('Todos');

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const res = await obtenerAlumnos();

                setAlumnos(res);
            } catch (error) {
                console.error('Error al obtener los alumnos:', error);
            }
        };

            fetchAlumnos();
        }, [recargar]);

    const alumnosFiltrados = alumnos.filter((alumno) => {
        const coincideNombre = `${alumno?.nombre} ${alumno?.apellido}`
        .toLowerCase()
        .includes(busqueda.toLowerCase());
        
        const coincideGrado = gradoFiltro === 'Todos' || alumno.grado === gradoFiltro;
        return coincideNombre && coincideGrado;
    }); 

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <select value={gradoFiltro} onChange={(e) => setGradoFiltro(e.target.value)}>
                <option value="Todos">Todos los grados</option>
                <option value="7º">Grado 7</option>
                <option value="8º">Grado 8</option>
                <option value="9º">Grado 9</option>
            </select>

            <p>Mostrando: {alumnosFiltrados.length} alumnos de {alumnos.length}</p>


            {alumnosFiltrados.map((alumno) => (
                <TarjetaAlumno
                    key={alumno.id}
                    id={alumno.id}
                    nombre={alumno.nombre}
                    apellido={alumno.apellido}
                    grado={alumno.grado}
                    seccion={alumno.seccion}
                    onSeleccionarAlumno={onSeleccionarAlumno}
                    onEditarAlumno={onEditar}
                />
            ))}
        </div>
    );
}