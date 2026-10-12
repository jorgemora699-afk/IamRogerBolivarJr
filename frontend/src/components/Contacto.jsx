import trainerConfig from "../config/trainerConfig";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../contacto.css";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const IconoChat = (
  <svg {...svgProps}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
);

const IconoApp = (
  <svg {...svgProps}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M12 8v6m0 0-2.5-2.5M12 14l2.5-2.5" />
  </svg>
);

const IconoFlecha = (
  <svg {...svgProps}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// Valores por defecto; se pueden cambiar con trainerConfig.seccionContacto
const TEXTOS = {
  eyebrow: "Contacto",
  titulo: "¿Listo para empezar",
  tituloAcento: "tu cambio?",
  texto:
    "Elige tu plan, cuéntame tus objetivos y hablamos directo por WhatsApp.",
  ...(trainerConfig.seccionContacto || {}),
};

// 573026036066 -> +57 302 603 6066 (si no coincide, se muestra tal cual)
const formatearTelefono = (n = "") =>
  n.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/, "+$1 $2 $3 $4");

function Contacto() {
  const [refTexto, textoVisible] = useScrollReveal();
  const [refTarjetas, tarjetasVisible] = useScrollReveal();
  const { whatsapp, appStoreUrl } = trainerConfig;

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__inner">
        <div
          ref={refTexto}
          className={`contacto__texto reveal ${textoVisible ? "reveal--visible" : ""}`}
        >
          <p className="contacto__eyebrow">{TEXTOS.eyebrow}</p>
          <h2 className="contacto__titulo">
            {TEXTOS.titulo}
            <span className="contacto__titulo-acento">{TEXTOS.tituloAcento}</span>
          </h2>
          <p className="contacto__descripcion">{TEXTOS.texto}</p>
        </div>

        <div
          ref={refTarjetas}
          className={`contacto__tarjetas reveal ${
            tarjetasVisible ? "reveal--visible" : ""
          }`}
          style={{ transitionDelay: "0.12s" }}
        >
          <a
            className="contacto__card contacto__card--wa"
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contacto__card-icono">{IconoChat}</span>
            <span className="contacto__card-textos">
              <span className="contacto__card-label">Escríbeme por WhatsApp</span>
              <span className="contacto__card-valor">
                {formatearTelefono(whatsapp)}
              </span>
            </span>
            <span className="contacto__card-flecha">{IconoFlecha}</span>
          </a>

          {appStoreUrl && (
            <a
              className="contacto__card contacto__card--app"
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contacto__card-icono">{IconoApp}</span>
              <span className="contacto__card-textos">
                <span className="contacto__card-label">App FitTrack</span>
                <span className="contacto__card-valor">Descarga la App</span>
              </span>
              <span className="contacto__card-flecha">{IconoFlecha}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contacto;