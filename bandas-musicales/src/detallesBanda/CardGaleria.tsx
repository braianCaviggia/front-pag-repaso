import "./cardGaleria.css";

interface CardGaleriaProps {
  imagenes: string[];
}

export const CardGaleria = ({ imagenes }: CardGaleriaProps) => {
  return (
    <div className="galeria">
      <h2>Galeria</h2>
      {imagenes.map((img, index) => (
        <img key={index} src={img} alt="Imagen de la banda" />
      ))}
    </div>
  );
};
