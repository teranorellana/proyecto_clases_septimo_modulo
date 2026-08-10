import {useState} from 'react';

export const TarjetaAlumno = ({
    id, 
    nombre, 
    grado, 
    seccion, 
    onSeleccionarAlumno,
}) => {
   
    const [matriculaActiva, setMatriculaActiva] = useState(true);

    const toggleMatricula = () => setMatriculaActiva((prevState) => !prevState);
    
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>
                Grado: {grado} / Sección: {seccion}
            </p>
            <p>Estado de matrícula: {matriculaActiva ? 'Activa' : 'Inactiva'}</p>

            <button onClick={toggleMatricula}>
                {matriculaActiva ? 'Dar de baja' : 'Reactivar matrícula'}
            </button>
            <button onClick={() => onSeleccionarAlumno(id)}>
                Ver detalle
            </button>
            
        </div>
    );
}
