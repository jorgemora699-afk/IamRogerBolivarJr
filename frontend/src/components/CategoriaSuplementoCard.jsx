function CategoriaSuplementoCard({ categoria, onClick }) {
  return (
    <div
      className="producto-card producto-card--clickeable"
      onClick={() => onClick(categoria)}
      role="button"
    >
      {categoria.imagen && (
        <div className="producto-card__imagen-wrap">
          <img className="producto-card__imagen-fondo" src={categoria.imagen} alt="" aria-hidden="true" />
          <img className="producto-card__imagen" src={categoria.imagen} alt={categoria.nombre} />
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