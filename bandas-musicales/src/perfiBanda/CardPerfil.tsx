import "./cardPerfil.css";

export const CardPerfil = (portada:string, perfil:string, nombre:string, pais:string, fecha:string, integrantes:string, genero:string) => {
  return (
    <>
      <div className="contenedor-perfil">
        <img
          src={portada}
          alt=""
          className="portada-perfil"
        />

        <div className="contenedor-fotoPerfil-botones">
          <div className="contenedor-foto-perfil">
            <img
              src={perfil}
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
          <h1 className="nombre-banda">{nombre}</h1>
          <ul className="contenedor-datos-banda">
            <li className="pais-banda">📌{pais}</li>
            <li className="fecha-banda">📅Formado en {fecha}</li>
            <li className="integrantes-banda">👤{integrantes} Integrantes</li>
            <li className="genero-banda">🎵{genero}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
