import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ProductoCard({ producto, index = 0 }) {
  const [ref, visible] = useScrollReveal();
  const [cargada, setCargada] = useState(false);

  return (
    <div
      ref={ref}
      className={`supl-wrap reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <article className="supl-card">
        {producto.imagen && (
          <div className="supl-card__media">
            {!cargada && <div className="skeleton" />}
            <img
              className="supl-card__img-fondo"
              src={producto.imagen}
              alt=""
              aria-hidden="true"
            />
            <img
              className="supl-card__img"
              src={producto.imagen}
              alt={producto.nombre}
              onLoad={() => setCargada(true)}
              style={{ opacity: cargada ? 1 : 0 }}
            />
          </div>
        )}

        <div className="supl-card__info">
          {producto.categoria && (
            <p className="supl-card__eyebrow">{producto.categoria}</p>
          )}
          <h3 className="supl-card__nombre">{producto.nombre}</h3>
          <p className="supl-card__descripcion">{producto.descripcion}</p>
        </div>
      </article>
    </div>
  );
}

export default ProductoCard;