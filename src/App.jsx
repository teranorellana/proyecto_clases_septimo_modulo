import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Encabezado from './components/Encabezado';
import TarjetaAlumno from './components/TarjetaAlumno';
import './App.css';



function App() {

  const nombreEstudiante = "Fredy Teran"
  const horaActual = new Date().getHours()

  const alumnos = [
    { id: 1, nombre: "Fredy Teran", grado: "10", seccion: "A" },
    { id: 2, nombre: "Juan Perez", grado: "11", seccion: "B" },
    { id: 3, nombre: "Maria Lopez", grado: "12", seccion: "C" },
  ];

  return (
   <div>
    <Encabezado />
    
    {alumnos.map((alumno) => (
      <TarjetaAlumno
        key={alumno.id}
        nombre={alumno.nombre}
        grado={alumno.grado}
        seccion={alumno.seccion}
      />
    ))}
   </div>
  )
}

export default App
