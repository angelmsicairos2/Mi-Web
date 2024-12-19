import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        {/* Enlace que lleva a la página de bienvenida */}
        <li><Link to="/">Inicio</Link></li> 
        {/* Enlace que lleva a la sección de Comedia */}
        <li><Link to="/comedia">Comedia</Link></li>
        {/* Enlace que lleva a la sección de Drama */}
        <li><Link to="/drama">Drama</Link></li>
        {/* Enlace que lleva a la sección de Acción */}
        <li><Link to="/accion">Acción</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
