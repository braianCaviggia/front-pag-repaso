import "./cardPerfil.css";

export const CardPerfil = () => {
  return (
    <>
      <div className="contenedor-perfil">
        <img
          src="https://media.ambito.com/p/0984c7c9cd61e0411977cc0993d41bae/adjuntos/239/imagenes/038/821/0038821983/soda-stereojpg.jpg"
          alt=""
          className="portada-perfil"
        />

        <div className="contenedor-fotoPerfil-botones">
          <div className="contenedor-foto-perfil">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xsnDyJgYCFIv44UY6GKQnR9Fxf1N4y5K5Q&s"
              alt=""
              className="foto-perfil"
            />
          </div>

          <div className="contenedor-botones">
            <button>▷ Reproducir</button>
            <button>Seguir</button>
            <button>...</button>
          </div>
        </div>

        <div className="contenedor-nombre-banda">
          <h1 className="nombre-banda">Soda Stereo</h1>
          <ul className="contenedor-datos-banda">
            <li className="pais-banda">📌Argentina</li>
            <li className="fecha-banda">📅Formado en 1982</li>
            <li className="integrantes-banda">👤3 Integrantes</li>
            <li className="genero-banda">🎵Rock</li>
          </ul>
        </div>
      </div>
    </>
  );
};
