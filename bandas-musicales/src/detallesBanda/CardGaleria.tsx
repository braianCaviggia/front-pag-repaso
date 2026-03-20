import "./cardGaleria.css"

export const CardGaleria = (imagenes: string[]) => {
  return (
    <>

    <div className="galeria">

        <h2>Galeria</h2>

        {imagenes.map(img => (
            <img src={img} alt="Imagen de la banda" />
        ))}

    </div>


    </>
  )
}
