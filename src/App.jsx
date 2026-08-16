import { Routes, Route } from 'react-router-dom';
import {Encabezado} from './components/Encabezado/Encabezado';
import { PaginaListaAlumnos } from './pages/PaginaListaAlumnos/PaginaListaAlumnos';
import { PaginaDetalleAlumno } from './pages/PaginaDetalleAlumno/PaginaDetalleAlumno';
import { PaginaEditarAlumno } from './pages/PaginaEditarAlumno/PaginaEditarAlumno';
import { PaginaCrearAlumno } from './pages/PaginaCrearAlumno/PaginaCrearAlumno';
import { PaginaLogin } from './pages/PaginaLogin/PaginaLogin';
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';
import './App.css'; 



function App() {


  return (
    <>
     
      <Routes>
       
        <Route path='/login' element={<PaginaLogin />} />
       
        <Route 
        path='/' 
        element=
        {<RutaProtegida>
          <PaginaListaAlumnos />
        </RutaProtegida>} />

        <Route 
        path='/alumnos/nuevo' 
        element={<RutaProtegida>
          <PaginaCrearAlumno />
        </RutaProtegida>} />

        <Route 
        path='/alumnos/:id' 
        element=
        {<RutaProtegida>
          <PaginaDetalleAlumno />
        </RutaProtegida>} />

        <Route 
        path='/alumnos/:id/editar' 
        element={
          <RutaProtegida>
            <PaginaEditarAlumno />
          </RutaProtegida>
          } />
      </Routes>

    </>
  );
}

export default App;


