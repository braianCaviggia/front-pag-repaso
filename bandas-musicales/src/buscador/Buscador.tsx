import { useState, KeyboardEvent } from "react";
import "./buscador.css";

interface BuscadorProps {
  onBuscar: (query: string) => void;
}

export const Buscador = ({ onBuscar }: BuscadorProps) => {
  const [query, setQuery] = useState("");

  const handleBuscar = () => {
    const trimmed = query.trim();
    if (trimmed !== "") {
      onBuscar(trimmed);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBuscar();
    }
  };

  return (
    <div className="contenedor-buscador">
      <span className="icono-buscar">🔍</span>
      <input
        className="input-buscador"
        type="text"
        placeholder="Buscar banda o artista..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-buscar" onClick={handleBuscar}>
        Buscar
      </button>
    </div>
  );
};
