import { useState } from "react";
import { CardBiografia } from "./biografiaBanda/CardBiografia";
import { CardDetallesBanda } from "./detallesBanda/CardDetallesBanda";
import { CardGaleria } from "./detallesBanda/CardGaleria";
import { CardPerfil } from "./perfiBanda/CardPerfil";
import { Buscador } from "./buscador/Buscador";

interface Banda {
  strArtist: string;
  strCountry: string;
  intFormedYear: string;
  strGenre: string;
  strStyle: string;
  strMood: string;
  strLabel: string;
  intMembers: string;
  strBiographyES: string;
  strBiographyEN: string;
  strArtistFanart: string;
  strArtistFanart2: string;
  strArtistFanart3: string;
  strArtistThumb: string;
}

function App() {
  const [banda, setBanda] = useState<Banda | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBuscar = async (query: string) => {
    setLoading(true);
    setError(null);
    setBanda(null);

    try {
      const res = await fetch(
        `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      if (data.artists && data.artists.length > 0) {
        setBanda(data.artists[0]);
      } else {
        setError(`No se encontró ninguna banda con el nombre "${query}"`);
      }
    } catch {
      setError("Hubo un error al buscar. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const imagenes = banda
    ? [banda.strArtistThumb, banda.strArtistFanart, banda.strArtistFanart2, banda.strArtistFanart3].filter(Boolean) as string[]
    : [];

  return (
    <div className="App">

      <header className="header">
        <Buscador onBuscar={handleBuscar} />
      </header>

      <main className="main">

        {loading && <p>Buscando...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {banda && (
          <>
            <div className="card-izquierda">
              <CardPerfil
                portada={banda.strArtistFanart ?? banda.strArtistThumb}
                perfil={banda.strArtistThumb}
                nombre={banda.strArtist}
                pais={banda.strCountry}
                fecha={banda.intFormedYear}
                integrantes={banda.intMembers}
                genero={banda.strGenre}
              />
              <CardBiografia
                biografia={banda.strBiographyES ?? banda.strBiographyEN ?? "Sin biografía disponible."}
              />
            </div>

            <div className="card-derecha">
              <CardDetallesBanda
                origen={banda.strCountry}
                formacion={banda.intFormedYear}
                genero={banda.strGenre}
                estilo={banda.strStyle}
                mood={banda.strMood}
                sello={banda.strLabel}
                integrantes={banda.intMembers}
              />
              {imagenes.length > 0 && <CardGaleria imagenes={imagenes} />}
            </div>
          </>
        )}

        {!loading && !error && !banda && (
          <p style={{ color: "#aaaaaa", margin: "40px auto" }}>
            Buscá una banda para ver su información.
          </p>
        )}

      </main>
    </div>
  );
}

export default App;
