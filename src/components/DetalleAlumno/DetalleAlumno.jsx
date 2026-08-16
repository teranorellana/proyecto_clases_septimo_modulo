import { useState, useEffect } from 'react';
import { obtenerAlumnoPorId } from '../../services/alumnosService';
import styles from './DetalleAlumno.module.css';

export const DetalleAlumno = ({ idAlumno, onCerrar }) => {
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
    }, [idAlumno]);

    // Pequeña validación visual mientras se cargan los datos
    if (!alumno) {
        return (
            <div className={styles.card}>
                <p className={styles.loading}>Cargando información del alumno...</p>
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Detalle del Alumno</h2>
            
            <p className={styles.infoRow}>
                <span className={styles.label}>Nombre:</span> 
                <span className={styles.value}>{alumno.nombre} {alumno.apellido}</span>
            </p>
            
            <p className={styles.infoRow}>
                <span className={styles.label}>Grado:</span> 
                <span className={styles.value}>{alumno.grado}</span>
                
                {/* Separador invisible en móvil, visible como un pequeño espacio en desktop */}
                <span className={styles.label} style={{ marginLeft: '0.5rem' }}>Sección:</span> 
                <span className={styles.value}>{alumno.seccion}</span>
            </p>
            
            <div className={styles.footer}>
                <button className={styles.btnCerrar} onClick={onCerrar}>
                    Cerrar detalle
                </button>
            </div>
        </div>
    );
};