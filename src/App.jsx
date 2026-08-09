import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { MensajeBienvenida } from './components/MensajeBienvenida.jsx'


import './App.css';



function App() {

  const nombreEstudiante = "Fredy Teran"
  const horaActual = new Date().getHours()

 return (
  <>
   <MensajeBienvenida />

  </>
 );
 
}

export default App
