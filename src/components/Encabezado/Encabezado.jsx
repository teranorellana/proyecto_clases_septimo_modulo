import styles from './Encabezado.module.css';

export const Encabezado = ({ usuarioActivo }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Colegio San Marcos - Sistema de Gestion</h1>

      <p className={styles.userInfo}>
        Usuario activo: <span className={styles.userName}>{usuarioActivo}</span>
      </p>
    </header>
  );
};