import React, { useState, useEffect } from 'react';

// Componente Seccion: muestra una lista de series según el género seleccionado.

function Seccion({ Titulo, Genero }) {
  // Estado para almacenar las series del género seleccionado
  const [series, setSeries] = useState([]);
// useEffect se ejecuta cuando cambia el género (Genero) y actualiza las series
  useEffect(() => {
    // Datos de series organizados por género
    const seriesData = {
      comedia: [
        { Nombre: 'The Office', descripcion: 'Una serie de comedia sobre la vida en una oficina.' },
        { Nombre: 'Parks and Recreation', descripcion: 'Una serie de comedia sobre el departamento de parques de una ciudad.' }
      ],
      drama: [
        { Nombre: 'Breaking Bad', descripcion: 'Un profesor de química se convierte en fabricante de metanfetaminas.' },
        { Nombre: 'Stranger Things', descripcion: 'Un grupo de niños descubre un mundo paralelo lleno de monstruos.' }
      ],
      accion: [
        { Nombre: 'The Mandalorian', descripcion: 'Un cazarrecompensas viaja por la galaxia.' },
        { Nombre: 'Arrow', descripcion: 'Un hombre millonario se convierte en un vigilante.' },
        { Nombre: 'Juego de Tronos', descripcion: 'Una épica serie sobre lucha por el poder en un reino medieval lleno de intriga.' },
        { Nombre: 'La Casa del Dragón', descripcion: 'La precuela de Juego de Tronos, que sigue la historia de la familia Targaryen.' },
        { Nombre: 'The Boys', descripcion: 'Un grupo de vigilantes intenta exponer la verdad detrás de los superhéroes corruptos y sus corporaciones.'}
      ]
    };
    // Actualiza las series según el género seleccionado o deja vacío si no coincide
    setSeries(seriesData[Genero] || []);
  }, [Genero]);

  return (
    <section>
      {/* Título de la sección */}
      <h2>{Titulo}</h2>
      <ul>
        {/* Mapea y muestra cada serie con su nombre y descripción */}
        {series.map((serie, index) => (
          <li key={index}>
            <h3>{serie.Nombre}</h3>
            <p>{serie.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Seccion;
