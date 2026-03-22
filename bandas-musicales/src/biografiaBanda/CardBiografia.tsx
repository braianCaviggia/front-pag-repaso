import "./cardBiografia.css";

interface CardBiografiaProps {
  biografia: string;
}

export const CardBiografia = ({ biografia }: CardBiografiaProps) => {
  return (
    <div className="card-biografia">
      <h2>Biografia</h2>
      <p>{biografia}</p>
    </div>
  );
};
