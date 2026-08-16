import { Routes, Route } from 'react-router-dom'
import { Encabezado } from './components/Encabezado';
import { PaginaListaAlumnos } from './pages/PaginaListaAlumnos'
import { PaginaDetalleAlumno } from './pages/PaginaDetalleAlumno'
import { PaginaEditarAlumno } from './pages/PaginaEditarAlumno'
import { PaginaCrearAlumno } from './pages/PaginaCrearAlumno'

import './App.css';



function App() {


  return (
    <>
      <Encabezado usuarioActivo={'Fredy Orellana T'} />
      <Routes>
        <Route path='/' element={<PaginaListaAlumnos />} />

        <Route path='/alumnos/nuevo' element={<PaginaCrearAlumno />} />

        <Route path='/alumnos/:id' element={<PaginaDetalleAlumno />} />

        <Route path='/alumnos/:id/editar' element={<PaginaEditarAlumno />} />
      </Routes>

    </>
  );
}

export default App;


