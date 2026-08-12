function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
      {producto.imagen && (
        <div className="producto-card__imagen-wrap">
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
          />
        </div>
      )}
      <div className="producto-card__info">
        <p className="producto-card__eyebrow">
          {producto.categoria}
        </p>
        <p className="producto-card__nombre">{producto.nombre}</p>
        <p className="producto-card__descripcion">{producto.descripcion}</p>
      </div>
    </div>
  );
}

export default ProductoCard;