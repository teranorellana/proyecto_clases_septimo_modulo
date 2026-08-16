import styles from './Encabezado.module.css';
import { useNavigate } from 'react-router-dom';

export const Encabezado = () => {
  const navigate = useNavigate();
  const usuarioGuardado = localStorage.getItem('usuario');
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Colegio San Marcos - Sistema de Gestion</h1>

      <p className={styles.userInfo}>
        Usuario activo: <span className={styles.userName}>{usuario?.nombre}</span>
      </p>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </header>
  );
};