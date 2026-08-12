function PlanCard({ plan, onElegir }) {
  return (
    <div className={`plan-card ${plan.destacado ? "plan-card--destacado" : ""}`}>
      {plan.destacado && <span className="plan-card__badge">★ Más popular</span>}

      <p className="plan-card__nombre">{plan.nombre}</p>
      <p className="plan-card__precio">
        ${plan.precioCOP.toLocaleString("es-CO")}
        <span className="plan-card__moneda">COP / mes</span>
      </p>
      <p className="plan-card__descripcion">{plan.descripcion}</p>

      <ul className="plan-card__lista">
        {plan.incluye.map((item, i) => (
          <li key={i} className="plan-card__item">
            <span className="plan-card__check">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button className="plan-card__boton" onClick={() => onElegir(plan)}>
        Elegir este plan
      </button>
    </div>
  );
}

export default PlanCard;