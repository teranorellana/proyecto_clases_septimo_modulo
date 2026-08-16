import {useState, useEffect} from 'react'

export const MensajeBienvenida = () => {
    const [mensaje, setMensaje] = useState('Cargado...');


    useEffect(() => {
       // console.log('useEffect se ejecuto al montar el componente');
       // setTimeout(() => {
         //   setMensaje('¡Bienvenido al curso de React!');
        // }, 2000);
        setMensaje('¡Bienvenido al curso de React!');
    }, []);

    return (
        <div>
            <h1>Ejemplo 3: Mensaje de bienvenida</h1>
            <p>{mensaje}</p>
        </div>
    );
};
