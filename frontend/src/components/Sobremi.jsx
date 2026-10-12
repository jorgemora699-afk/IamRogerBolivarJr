import { useState } from "react";
import trainerConfig from "../config/trainerConfig";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../Sobremi.css";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ICONOS = {
  planes: (
    <svg {...svgProps}>
      <path d="M9 4h6v3H9zM7 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1M8 12h8M8 16h5" />
    </svg>
  ),
  acompanamiento: (
    <svg {...svgProps}>
      <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 5.2a3.5 3.5 0 0 1 0 6.6" />
    </svg>
  ),
  resultados: (
    <svg {...svgProps}>
      <path d="M5 20v-9M12 20V4M19 20v-6M3 20h18" />
    </svg>
  ),
};

// Valores por defecto; se pueden cambiar con trainerConfig.seccionSobreMi
const TEXTOS = {
  imagen: "/images/home/ase.png",
  eyebrow: "Sobre mí",
  titulo: "Disciplina, experiencia",
  tituloAcento: "y pasión por el fitness",
  texto:
    "Soy un entrenador certificado, comprometido con acompañarte en tu proceso de transformación. Mi objetivo es que alcances tus metas de forma segura, efectiva y sostenible, con un enfoque personalizado y basado en ciencia y en la biomecánica aplicada al entrenamiento de fuerza.",
  beneficios: [
    { icono: "planes", texto: "Planes personalizados" },
    { icono: "acompanamiento", texto: "Acompañamiento constante" },
    { icono: "resultados", texto: "Enfoque en resultados" },
  ],
  ...(trainerConfig.seccionSobreMi || {}),
};

function SobreMi() {
  const [ref, visible] = useScrollReveal();
  const [imgError, setImgError] = useState(false);
  const conFoto = TEXTOS.imagen && !imgError;

  return (
    <section id="sobre-mi" className="sobremi">
      <div
        ref={ref}
        className={`sobremi__card reveal ${visible ? "reveal--visible" : ""} ${
          conFoto ? "" : "sobremi__card--sin-foto"
        }`}
      >
        {conFoto && (
          <div className="sobremi__foto">
            <span className="sobremi__franja" aria-hidden="true" />
            <img
              src={TEXTOS.imagen}
              alt=""
              className="sobremi__img"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          </div>
        )}

        <div className="sobremi__contenido">
          <p className="sobremi__eyebrow">{TEXTOS.eyebrow}</p>
          <h2 className="sobremi__titulo">
            {TEXTOS.titulo} <span className="sobremi__acento">{TEXTOS.tituloAcento}</span>
          </h2>
          <p className="sobremi__texto">{TEXTOS.texto}</p>

          <ul className="sobremi__beneficios">
            {TEXTOS.beneficios.map((b) => (
              <li key={b.texto} className="sobremi__beneficio">
                <span className="sobremi__icono">{ICONOS[b.icono]}</span>
                <span>{b.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;