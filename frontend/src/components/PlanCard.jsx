function PlanCard({ plan }) {
  return (
    <div className={`plan-card ${plan.destacado ? "plan-card--destacado" : ""}`}>
      {plan.destacado && <span className="plan-card__badge">Más popular</span>}

      <p className="plan-card__nombre">{plan.nombre}</p>
      <p className="plan-card__precio">
        ${plan.precioCOP.toLocaleString("es-CO")}
        <span className="plan-card__moneda">COP</span>
      </p>
      <p className="plan-card__usd">≈ ${plan.precioUSD} USD</p>
      <p className="plan-card__descripcion">{plan.descripcion}</p>

      <ul className="plan-card__lista">
        {plan.incluye.map((item, i) => (
          <li key={`si-${i}`} className="plan-card__item plan-card__item--si">
            ✓ {item}
          </li>
        ))}
        {plan.noIncluye.map((item, i) => (
          <li key={`no-${i}`} className="plan-card__item plan-card__item--no">
            ✕ {item}
          </li>
        ))}
      </ul>

      <button className="plan-card__boton">Elegir este plan</button>
    </div>
  );
}

export default PlanCard;