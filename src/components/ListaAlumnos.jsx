import { useState } from 'react'; 
import { TarjetaAlumno } from './TarjetaAlumno';

export const ListaAlumnos = () => {
    const [busqueda, setBusqueda] = useState('');
    const [gradoFiltro, setGradoFiltro] = useState('Todos');

    const alumnos = [
        { id: 1, nombre: "Fredy Lombardo", grado: "10", seccion: "A" },
        { id: 2, nombre: "Juan Perez", grado: "11", seccion: "B" },
        { id: 3, nombre: "Maria Lopez", grado: "12", seccion: "C" },
    ];

    const alumnosFiltrados = alumnos.filter((alumno) => {
        const coincideNombre = alumno.nombre.toLowerCase().includes(busqueda.toLowerCase());
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
                <option value="10">Grado 10</option>
                <option value="11">Grado 11</option>
                <option value="12">Grado 12</option>
            </select>
            
            <p>Mostrando: {alumnosFiltrados.length} alumnos de {alumnos.length}</p>
            
            
            {alumnosFiltrados.map((alumno) => (
                <TarjetaAlumno
                    key={alumno.id}
                    nombre={alumno.nombre}
                    grado={alumno.grado}
                    seccion={alumno.seccion}
                />
            ))}
        </div>
    );
}