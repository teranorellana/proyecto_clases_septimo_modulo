import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Interruptor } from './components/interruptor.jsx'

import './App.css';



function App() {

  const nombreEstudiante = "Fredy Teran"
  const horaActual = new Date().getHours()

 return (
  <>
   <Interruptor />

  </>
 );
 
}

export default App
