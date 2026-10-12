import trainerConfig from "../config/trainerConfig";
import PlanCard from "./PlanCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../planes.css";

// Valores por defecto; se pueden cambiar con trainerConfig.seccionPlanes
const TEXTOS = {
  eyebrow: "Mis Planes",
  titulo: "Elige el plan que",
  tituloAcento: "se adapte a ti",
  texto:
    "Cada cuerpo es diferente, por eso he diseñado paquetes personalizados para ayudarte a lograr tus objetivos, sin importar tu nivel de experiencia.",
  ...(trainerConfig.seccionPlanes || {}),
};

function Planes({ onElegir }) {
  const [refCabecera, cabeceraVisible] = useScrollReveal();

  return (
    <section id="planes" className="planes">
      <div className="planes__inner">
        <header
          ref={refCabecera}
          className={`planes__cabecera reveal ${
            cabeceraVisible ? "reveal--visible" : ""
          }`}
        >
          <p className="planes__eyebrow">{TEXTOS.eyebrow}</p>
          <h2 className="planes__titulo">
            {TEXTOS.titulo}
            <span className="planes__titulo-acento">{TEXTOS.tituloAcento}</span>
          </h2>
          <p className="planes__texto">{TEXTOS.texto}</p>
        </header>

        <div className="planes__grid">
          {trainerConfig.planes.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} onElegir={onElegir} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planes;