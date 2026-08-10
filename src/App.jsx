import { useState } from 'react'
import { Encabezado } from './components/Encabezado';
import { ListaAlumnos } from './components/ListaAlumnos';
import {DetalleAlumno} from './components/DetalleAlumno';
import {FormularioCrear} from './components/FormularioCrear';
import {FormularioEditar} from './components/FormularioEditar';
import './App.css';



function App() {
  const [idAlumnoSeleccionado, setIdAlumnoSeleccionado] = useState(null);

  const [alumnoEditar, setAlumnoEditar] = useState(null);

  const [mostrarFormularioCrear, setMostrarFormularioCrear] = useState(false);

  const [mostrarFormularioEditar, setMostrarFormularioEditar] = useState(false);

  const [recargar, setRecargar] = useState(false);  

  

 return (
  <>
   <Encabezado usuarioActivo={'Fredy Orellana T'} />
   <ListaAlumnos onSeleccionarAlumno={setIdAlumnoSeleccionado} />

   {
    idAlumnoSeleccionado && (
      <DetalleAlumno
      idAlumno={idAlumnoSeleccionado}
      />
    )
   }

  </>
 );
 
}

export default App
