import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function CategoriaSuplementoCard({ categoria, onClick, index = 0 }) {
  const [ref, visible] = useScrollReveal();
  const [cargada, setCargada] = useState(false);

  return (
    <div
      ref={ref}
      className={`supl-wrap reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <button
        type="button"
        className="supl-card supl-card--clickeable"
        onClick={() => onClick(categoria)}
      >
        {categoria.imagen && (
          <div className="supl-card__media">
            {!cargada && <div className="skeleton" />}
            <img
              className="supl-card__img-fondo"
              src={categoria.imagen}
              alt=""
              aria-hidden="true"
            />
            <img
              className="supl-card__img"
              src={categoria.imagen}
              alt={categoria.nombre}
              onLoad={() => setCargada(true)}
              style={{ opacity: cargada ? 1 : 0 }}
            />
          </div>
        )}

        <div className="supl-card__info">
          <h3 className="supl-card__nombre">{categoria.nombre}</h3>
          <p className="supl-card__descripcion">{categoria.descripcion}</p>
          <span className="supl-card__cta">
            Me interesa
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </button>
    </div>
  );
}

export default CategoriaSuplementoCard;