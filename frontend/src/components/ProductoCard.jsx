import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ProductoCard({ producto, index = 0 }) {
  const [ref, visible] = useScrollReveal();
  const [cargada, setCargada] = useState(false);

  return (
    <div
      ref={ref}
      className={`producto-card reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {producto.imagen && (
        <div className="producto-card__imagen-wrap">
          {!cargada && <div className="skeleton" />}
          <img
            className="producto-card__imagen-fondo"
            src={producto.imagen}
            alt=""
            aria-hidden="true"
          />
          <img
            className="producto-card__imagen"
            src={producto.imagen}
            alt={producto.nombre}
            onLoad={() => setCargada(true)}
            style={{ opacity: cargada ? 1 : 0 }}
          />
        </div>
      )}
      <div className="producto-card__info">
        <p className="producto-card__eyebrow">{producto.categoria}</p>
        <p className="producto-card__nombre">{producto.nombre}</p>
        <p className="producto-card__descripcion">{producto.descripcion}</p>
      </div>
    </div>
  );
}

export default ProductoCard;