import { useState } from 'react';
import { crearAlumno } from '../../services/alumnosService';
import { manejarError } from '../../utils/manejarError';
import { validarCampos } from '../../utils/validarCampos';
import styles from './FormularioCrear.module.css'; // <-- Importando estilos futuristas

const estadoInicial = {
    nombre: '',
    apellido: '',
    grado: '',
    seccion: '',
};

export const FormularioCrear = ({ onGuardado, onCancelar }) => {
    const [campos, setCampos] = useState(estadoInicial);
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCampos((anterior) => ({ ...anterior, [name]: value }));

        if (errores[name]) {
            setErrores((anterior) => ({ ...anterior, [name]: null }));
        }
    };

    const handleGuardar = async () => {
        const erroresEncontrado = validarCampos(campos);

        if (Object.keys(erroresEncontrado).length > 0) {
            setErrores(erroresEncontrado);
            return;
        }

        try {
            await crearAlumno(campos);
            onGuardado();
        } catch (error) {
            console.error('Error al momento de guardar un alumno');
            manejarError(error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Registrar Nuevo Estudiante</h2>

            <div className={styles.formGroup}>
                <label className={styles.label}>Nombre</label>
                <input
                    type='text'
                    name='nombre'
                    value={campos.nombre}
                    onChange={handleChange}
                    placeholder='Ej: Fredy'
                    className={`${styles.input} ${errores.nombre ? styles.inputError : ''}`}
                />
                {errores.nombre && <span className={styles.errorText}>{errores.nombre}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Apellido</label>
                <input
                    type='text'
                    name='apellido'
                    value={campos.apellido}
                    onChange={handleChange}
                    placeholder='Ej: Teran'
                    className={`${styles.input} ${errores.apellido ? styles.inputError : ''}`}
                />
                {errores.apellido && <span className={styles.errorText}>{errores.apellido}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Nivel / Grado</label>
                <select
                    name='grado'
                    value={campos.grado}
                    onChange={handleChange}
                    className={`${styles.input} ${errores.grado ? styles.inputError : ''}`}
                >
                    <option value="">-- Seleccionar nivel --</option>
                    <option value='7to'>7º Grado</option>
                    <option value='8to'>8º Grado</option>
                    <option value='9to'>9º Grado</option>
                </select>
                {errores.grado && <span className={styles.errorText}>{errores.grado}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Módulo / Sección</label>
                <select
                    name='seccion'
                    value={campos.seccion}
                    onChange={handleChange}
                    className={`${styles.input} ${errores.seccion ? styles.inputError : ''}`}
                >
                    <option value="">-- Seleccionar módulo --</option>
                    <option value='A'>Sección A</option>
                    <option value='B'>Sección B</option>
                </select>
                {errores.seccion && <span className={styles.errorText}>{errores.seccion}</span>}
            </div>

            <div className={styles.buttonGroup}>
                <button className={styles.btnPrimary} onClick={handleGuardar}>
                    Inicializar Registro
                </button>
                <button className={styles.btnSecondary} onClick={onCancelar}>
                    Abortar
                </button>
            </div>
        </div>
    );
};