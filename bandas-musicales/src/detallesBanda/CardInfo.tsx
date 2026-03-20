import "./cardDetallesBanda.css"

export const CardInfo = (tipoInfo:string, info:string |number) => {
  return (
    <>
      <div className="info-banda">
        <p>{tipoInfo}</p>
        <p>{info}</p>
      </div>
    </>
  );
};
