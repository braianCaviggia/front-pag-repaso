import "./cardDetallesBanda.css";

interface CardInfoProps {
  tipoInfo: string;
  info: string | number;
}

export const CardInfo = ({ tipoInfo, info }: CardInfoProps) => {
  return (
    <div className="info-banda">
      <p>{tipoInfo}</p>
      <p>{info}</p>
    </div>
  );
};
