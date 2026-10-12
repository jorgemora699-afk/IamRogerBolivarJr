import { useState } from "react";
import trainerConfig from "../config/trainerConfig";
import PlanCard from "./PlanCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../planes.css";

// Valores por defecto; se pueden cambiar con trainerConfig.seccionPlanes
const TEXTOS = {
  eyebrow: "Mis paquetes",
  titulo: "Elige el plan que",
  tituloAcento: "se adapte a ti",
  texto:
    "Cada cuerpo es diferente, por eso he diseñado paquetes personalizados para ayudarte a lograr tus objetivos, sin importar tu nivel de experiencia.",
  imagen: "/images/home/ase.png",
  ...(trainerConfig.seccionPlanes || {}),
};

function Planes({ onElegir }) {
  const [refFoto, fotoVisible] = useScrollReveal();
  const [refTexto, textoVisible] = useScrollReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="planes" className="planes">
      {/* Franja clara: foto + texto */}
      <div className="planes__intro">
        <div className="planes__intro-inner">
          {TEXTOS.imagen && !imgError && (
            <div
              ref={refFoto}
              className={`planes__foto reveal ${fotoVisible ? "reveal--visible" : ""}`}
            >
              <span className="planes__foto-franja" aria-hidden="true" />
              <img
                src={TEXTOS.imagen}
                alt=""
                className="planes__foto-img"
                onError={() => setImgError(true)}
              />
            </div>
          )}

          <header
            ref={refTexto}
            className={`planes__cabecera reveal ${textoVisible ? "reveal--visible" : ""}`}
            style={{ transitionDelay: "0.12s" }}
          >
            <p className="planes__eyebrow">{TEXTOS.eyebrow}</p>
            <h2 className="planes__titulo">
              {TEXTOS.titulo}
              <span className="planes__titulo-acento">{TEXTOS.tituloAcento}</span>
            </h2>
            <p className="planes__texto">{TEXTOS.texto}</p>
          </header>
        </div>
      </div>

      {/* Panel oscuro: planes */}
      <div className="planes__panel">
        <div className="planes__panel-inner">
          <div className="planes__grid">
            {trainerConfig.planes.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} onElegir={onElegir} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planes;