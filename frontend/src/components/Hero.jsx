import { useState } from "react";
import trainerConfig from "../config/trainerConfig";

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
  energia: (
    <svg {...svgProps}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  rendimiento: (
    <svg {...svgProps}>
      <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
    </svg>
  ),
  salud: (
    <svg {...svgProps}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
  resultados: (
    <svg {...svgProps}>
      <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />
    </svg>
  ),
};

const IconoCalendario = (
  <svg {...svgProps}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17M9 15l2 2 4-4" />
  </svg>
);

function Hero({ onNavigate }) {
  const { hero } = trainerConfig;
  const [imgError, setImgError] = useState(false);

  const n = hero.lineas.length;

  return (
    <section id="home" className="hero">
      <div className="hero__media" aria-hidden="true">
        {!imgError && (
          <img
            src={hero.imagen}
            alt=""
            className="hero__img"
            fetchPriority="high"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="hero__inner">
        <div className="hero__texto">
          <p className="hero__etiqueta rise" style={{ "--i": 0 }}>
            {hero.etiqueta}
          </p>

          <h1 className="hero__titulo">
            {hero.lineas.map((linea, i) => (
              <span key={i} className="hero__linea rise" style={{ "--i": i + 1 }}>
                {linea}
              </span>
            ))}
            <span
              className="hero__linea hero__linea--acento rise"
              style={{ "--i": n + 1 }}
            >
              {hero.destacada}
            </span>
          </h1>

          <p className="hero__descripcion rise" style={{ "--i": n + 2 }}>
            {hero.descripcion}
          </p>

          <div className="hero__acciones rise" style={{ "--i": n + 3 }}>
            <button className="btn btn--borde" onClick={() => onNavigate("planes")}>
              {IconoCalendario}
              {hero.botonSecundario}
            </button>
          </div>
        </div>

        <ul className="hero__beneficios">
          {hero.beneficios.map((b, i) => (
            <li
              key={b.texto}
              className="hero__beneficio rise"
              style={{ "--i": n + 4 + i * 0.6 }}
            >
              <span className="hero__beneficio-icono">{ICONOS[b.icono]}</span>
              <span>{b.texto}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="hero__scroll"
        onClick={() => onNavigate("planes")}
        aria-label="Bajar a los planes"
      >
        <span />
      </button>
    </section>
  );
}

export default Hero;