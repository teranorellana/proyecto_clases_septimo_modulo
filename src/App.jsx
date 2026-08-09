import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Encabezado } from './components/Encabezado'
import { ListaAlumnos } from './components/ListaAlumnos';
import './App.css';



function App() {

  const nombreEstudiante = "Fredy Teran"
  const horaActual = new Date().getHours()

 return (
  <>
   <Encabezado usuarioActivo={'Fredy Orellana T'} />
   <ListaAlumnos />

  </>
 );
 
}

export default App
