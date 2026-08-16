import styles from './Encabezado.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { obtenerRolUsuario } from '../../utils/jwt'

export const Encabezado = () => {
  const navigate = useNavigate();
  const usuarioGuardado = localStorage.getItem('usuario');
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  const rol = obtenerRolUsuario();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Colegio San Marcos - Sistema de Gestion</h1>

      <nav>
        <Link to="/">Alumnos</Link>

        {
          rol === 'ADMIN' && <Link to='/usuarios'>Usuarios</Link>
        }
      </nav>

      <p className={styles.userInfo}>
        Usuario activo: <span className={styles.userName}>{usuario?.nombre}</span>
      </p>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </header>
  );
};