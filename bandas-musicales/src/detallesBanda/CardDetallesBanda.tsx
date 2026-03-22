import "./cardDetallesBanda.css";
import { CardInfo } from "./CardInfo";

interface CardDetallesBandaProps {
  origen: string;
  formacion: string;
  genero: string;
  estilo: string;
  mood: string;
  sello: string;
  integrantes: string;
}

export const CardDetallesBanda = ({
  origen,
  formacion,
  genero,
  estilo,
  mood,
  sello,
  integrantes,
}: CardDetallesBandaProps) => {
  return (
    <div className="contenedor-card-detalles">
      <h2>Detalles de la banda</h2>
      <CardInfo tipoInfo="Origen" info={origen} />
      <CardInfo tipoInfo="Formación" info={formacion} />
      <CardInfo tipoInfo="Género" info={genero} />
      <CardInfo tipoInfo="Estilo" info={estilo} />
      <CardInfo tipoInfo="Mood" info={mood} />
      <CardInfo tipoInfo="Sello discográfico" info={sello} />
      <CardInfo tipoInfo="Integrantes" info={integrantes} />
    </div>
  );
};
