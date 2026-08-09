import {useState} from 'react'

export const CampoTexto = () => {
    const [texto, setTexto] = useState('');

    console.log('estado de texto:', texto);

    return (
        <div>
            <h1>Ejemplo 2: Campo de texto</h1>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escribe algo..."
                
            />
            <p>Texto ingresado: {texto.length}</p>
            <p>Lo que escribiste: {texto}</p>
            <button onClick={() => setTexto('')}>Limpiar</button>
        </div>
    );
};