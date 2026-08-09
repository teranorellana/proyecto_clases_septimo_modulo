import {TarjetaAlumno} from './TarjetaAlumno';

export const ListaAlumnos = () => {
    const alumnos = [
        { id: 1, nombre: "Fredy Lombardo", grado: "10", seccion: "A" },
        { id: 2, nombre: "Juan Perez", grado: "11", seccion: "B" },
        { id: 3, nombre: "Maria Lopez", grado: "12", seccion: "C" },
    ];

    return (
        <div>
            {alumnos.map((alumno) => (
                <TarjetaAlumno
                    nombre={alumno.nombre}
                    grado={alumno.grado}
                    seccion={alumno.seccion}
                />
            ))}
        </div>
    );
}


