import React from 'react';
//Herramientas necesarias para manejar rutas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Componentes que serán usados 
import Header from './Componentes/Header';
import Menu from './Componentes/Menu';
import Seccion from './Componentes/Secciones';
import Footer from './Componentes/Footer';
import './App.css';
import Bienvenida from './Componentes/Bienvenida';

// Componente principal de la aplicación
function App() {
  return (
    <Router> {/* Configura el enrutador para la navegación */}
      <div className="App">
        <Header />{/* Encabezado del sitio */}
        <Menu /> {/* Menú de navegación */}
        <Routes> {/* Rutas de la Web */}
        {/* Ruta para la sección de comedia*/}
          <Route path="/comedia" element={<Seccion Titulo="Comedia" Genero="comedia" />} />
          {/*Ruta para la sección de Drama*/}
          <Route path="/drama" element={<Seccion Titulo="Drama" Genero="drama" />} />
          {/*Ruta para la sección de Acción*/}
          <Route path="/accion" element={<Seccion Titulo="Acción" Genero="accion" />} />
          {/*Ruta para la sección de Bienvenida */}
          <Route path="/" element={<Bienvenida />} />
        </Routes>
        <Footer /> {/*Pie de la pagina*/}
      </div>
    </Router>
  );
}

export default App;
