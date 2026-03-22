import { useState } from "react";
import "./cardPerfil.css";

export const CardPerfil = (
  portada: string,
  perfil: string,
  nombre: string,
  pais: string,
  fecha: string,
  integrantes: string,
  genero: string,
) => {


  const [seguir, setSeguir] = useState(false);

  const handleSeguir = () => {
    let nuevoEstado = !seguir;
    setSeguir(nuevoEstado);

    if (seguir) {
      alert(`Dejaste de seguir a ${nombre}`);
    }

    else {
      alert(`Seguiste a ${nombre}`);
    }
  };


  const handleReproducir = () => {
    alert("No hay musica disponible de esta banda")
  }

  const seguidores = () => {
    if (seguir) {
      return "26.100"
    } else {
      return "26.099"
    }
  }

  return (
    <>
      <div className="contenedor-perfil">
        <img src={portada} alt="" className="portada-perfil" />

        <div className="contenedor-fotoPerfil-botones">
          <div className="contenedor-foto-perfil">
            <img src={perfil} alt="" className="foto-perfil" />
          </div>

          <div className="contenedor-botones">
            <button onClick={handleReproducir}>▷ Reproducir</button>
            <button onClick={handleSeguir}>
              {seguir ? "Siguiendo" : "Seguir"}
            </button>
            <button>...</button>
          </div>
        </div>

        <div className="contenedor-nombre-banda">
          <h1 className="nombre-banda">{nombre}</h1>
          <ul className="contenedor-datos-banda">
            <li className="pais-banda">📌{pais}</li>
            <li className="fecha-banda">📅Formado en {fecha}</li>
            <li className="integrantes-banda">👤{integrantes} Integrantes</li>
            <li className="genero-banda">🎵{genero}</li>
            <li className="genero-banda">👤👤Seguidores: {seguidores()} </li>
          </ul>
        </div>
      </div>
    </>
  );
};
