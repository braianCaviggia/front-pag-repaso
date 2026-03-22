import { CardBiografia } from "./biografiaBanda/CardBiografia";
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

          {CardBiografia("Soda Stereo fue una banda de rock argentina considerada por la crítica como la más importante e influyente de Iberoamérica de todos los tiempos.\nEste potente trío, compuesto por Gustavo Cerati (voz y guitarra), Héctor \"Zeta\" Bosio (bajo y coros), y el baterista Charly Alberti, alcanzó el éxito internacional durante las décadas de 1980 y 1990. La banda es ampliamente considerada precursora del movimiento latinoamericano/iberoamericano/rock en español que surgió a mediados de la década de 1980.\nEl sonido inicial de Soda estuvo influenciado por bandas de new wave como Virus, The Police, Elvis Costello y bandas de post-punk como Television.\nLa banda evolucionó gradualmente hacia una banda de rock alternativo con un sonido más pesado, con influencias del rock clásico, el rock progresivo, el shoegaze, la neopsicodelia, el britpop y la música electrónica.")}
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
