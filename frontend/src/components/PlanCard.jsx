import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

function PlanCard({ plan, onElegir, index = 0 }) {
  const [ref, visible] = useScrollReveal();
  const precioAnimado = useCountUp(plan.precioCOP, visible, 1500);

  return (
    <div
      ref={ref}
      className={`plan-wrap ${plan.destacado ? "plan-wrap--destacado" : ""} reveal ${
        visible ? "reveal--visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <article className={`plan ${plan.destacado ? "plan--destacado" : ""}`}>
        {plan.destacado && <span className="plan__badge">★ Más popular</span>}

        <h3 className="plan__nombre">{plan.nombre}</h3>
        <p className="plan__tag">{plan.descripcion}</p>

        <p className="plan__precio">
          ${precioAnimado.toLocaleString("es-CO")}
          <span className="plan__moneda">COP / mes</span>
        </p>

        <ul className="plan__lista">
          {plan.incluye.map((item, i) => (
            <li key={i} className="plan__item">
              <span className="plan__check" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <button
          className={`btn plan__boton ${
            plan.destacado ? "btn--amarillo" : "btn--borde"
          }`}
          onClick={() => onElegir(plan)}
        >
          Elegir este plan
        </button>
      </article>
    </div>
  );
}

export default PlanCard;