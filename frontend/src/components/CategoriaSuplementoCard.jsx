import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function CategoriaSuplementoCard({ categoria, onClick, index = 0 }) {
  const [ref, visible] = useScrollReveal();
  const [cargada, setCargada] = useState(false);

  return (
    <div
      ref={ref}
      className={`producto-card producto-card--clickeable reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onClick={() => onClick(categoria)}
      role="button"
    >
      {categoria.imagen && (
        <div className="producto-card__imagen-wrap">
          {!cargada && <div className="skeleton" />}
          <img className="producto-card__imagen-fondo" src={categoria.imagen} alt="" aria-hidden="true" />
          <img
            className="producto-card__imagen"
            src={categoria.imagen}
            alt={categoria.nombre}
            onLoad={() => setCargada(true)}
            style={{ opacity: cargada ? 1 : 0 }}
          />
        </div>
      )}
      <div className="producto-card__info">
        <p className="producto-card__nombre">{categoria.nombre}</p>
        <p className="producto-card__descripcion">{categoria.descripcion}</p>
      </div>
    </div>
  );
}

export default CategoriaSuplementoCard;