import { CardDetallesBanda } from "./detallesBanda/CardDetallesBanda";
import { CardGaleria } from "./detallesBanda/CardGaleria";
import { CardPerfil } from "./perfiBanda/CardPerfil";

function App() {
  return (
    <div className="App">
      <header className="header">//Aca va el buscador</header>

      <main className="main">
        <div className="card-izquierda">
          {CardPerfil(
            "https://media.ambito.com/p/0984c7c9cd61e0411977cc0993d41bae/adjuntos/239/imagenes/038/821/0038821983/soda-stereojpg.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xsnDyJgYCFIv44UY6GKQnR9Fxf1N4y5K5Q&s",
            "Soda Stereo",
            "Argentina",
            "1983",
            "3",
            "Rock",
          )}
        </div>

        <div className="card-derecha">
          {CardDetallesBanda(
            "Argentina",
            "1983",
            "Rock",
            "Experimental",
            "Energético",
            "Sony Music",
            "3",
          )}

          {CardGaleria([
            "https://r2.theaudiodb.com/images/media/artist/thumb/soda-stereo-4fcd8a48713e7.JPG",
            "https://r2.theaudiodb.com/images/media/artist/fanart/soda-stereo-4fcd8a159c128.jpg",
            "https://r2.theaudiodb.com/images/media/artist/fanart/soda-stereo-4fcd8a305b322.jpg",
          ])}
        </div>
      </main>
    </div>
  );
}

export default App;
