import { useState, useEffect } from 'react';
import { actualizarAlumno } from '../../services/alumnosService';
import { validarCampos } from '../../utils/validarCampos';
import { manejarError } from '../../utils/manejarError';
import styles from './FormularioEditar.module.css'; // <-- Importando estilos

const estadoInicial = {
  nombre: '',
  apellido: '',
  grado: '',
  seccion: '',
};

export const FormularioEditar = ({ alumnoEditar, onGuardado, onCancelar }) => {
  const [campos, setCampos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    setCampos({
      nombre: alumnoEditar?.nombre || '',
      apellido: alumnoEditar?.apellido || '',
      grado: alumnoEditar?.grado || '',
      seccion: alumnoEditar?.seccion || '',
    });
  }, [alumnoEditar]);

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
      await actualizarAlumno(alumnoEditar.id, campos);
      onGuardado();
    } catch (error) {
      console.error('Error al momento de guardar un alumno');
      manejarError(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Actualizar Alumno</h2>

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
        {errores.nombre && <p className={styles.errorText}>{errores.nombre}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Apellido</label>
        <input
          type='text'
          name='apellido'
          value={campos.apellido}
          onChange={handleChange}
          placeholder='Ej: Terán'
          className={`${styles.input} ${errores.apellido ? styles.inputError : ''}`}
        />
        {errores.apellido && <p className={styles.errorText}>{errores.apellido}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Grado</label>
        <select 
          name='grado' 
          value={campos.grado} 
          onChange={handleChange}
          className={`${styles.input} ${errores.grado ? styles.inputError : ''}`}
        >
          <option value="">Selecciona un grado</option>
          <option value='7to'>7º Grado</option>
          <option value='8to'>8º Grado</option>
          <option value='9to'>9º Grado</option>
        </select>
        {errores.grado && <p className={styles.errorText}>{errores.grado}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Sección</label>
        <select 
          name='seccion' 
          value={campos.seccion} 
          onChange={handleChange}
          className={`${styles.input} ${errores.seccion ? styles.inputError : ''}`}
        >
          <option value="">Selecciona una sección</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
        </select>
        {errores.seccion && <p className={styles.errorText}>{errores.seccion}</p>}
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.btnPrimary} onClick={handleGuardar}>
          Actualizar alumno
        </button>
        <button className={styles.btnSecondary} onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};