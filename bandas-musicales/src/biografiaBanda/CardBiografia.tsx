import "./cardBiografia.css"

export const CardBiografia = (biografia : string) => {
  return (
    <>

    <div className="card-biografia">

        <h2>Biografia</h2>
        <p>{biografia}</p>

    </div>
    
    </>
  )
}
