import "./cardDetallesBanda.css";
import { CardInfo } from "./CardInfo";

export const CardDetallesBanda = (origen: string, formacion: string, genero: string, estilo: string, mood: string, sello: string, integrantes: string) => {
  return (
    <>
      <div className="contenedor-card-detalles">
        <h2>Detalles de la banda</h2>

        {CardInfo("Origen", origen)}
        {CardInfo("Formación", formacion)}
        {CardInfo("Género", genero)}
        {CardInfo("Estilo", estilo)}
        {CardInfo("Mood", mood)}
        {CardInfo("Sello discográfico", sello)}
        {CardInfo("Integrantes", integrantes)}
        
      </div>
    </>
  );
};
