export const TarjetaAlumno = ({nombre , grado, seccion}) => {
   
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>
                Grado: {grado} / Sección: {seccion}
            </p>
        </div>
    );
}
