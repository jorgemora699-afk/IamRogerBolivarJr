import { useRef } from "react";
import trainerConfig from "../config/trainerConfig";
import TestimonioFotos from "./TestimonioFotos";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../testimonios.css";

// Valores por defecto; se pueden cambiar con trainerConfig.seccionTestimonios
const TEXTOS = {
  eyebrow: "Testimonios",
  titulo: "Resultados",
  tituloAcento: "reales",
  texto: "Personas reales que decidieron empezar su cambio.",
  vacioTitulo: "Muy pronto",
  vacioTexto:
    "Estoy reuniendo las historias de mis clientes. Si ya entrenas conmigo, escríbeme y sé el primero en aparecer aquí.",
  vacioBoton: "Escríbeme por WhatsApp",
  ...(trainerConfig.seccionTestimonios || {}),
};

function Testimonios() {
  const [refCabecera, cabeceraVisible] = useScrollReveal();
  const [refVacio, vacioVisible] = useScrollReveal();
  const pistaRef = useRef(null);
  const { testimonios = [], whatsapp } = trainerConfig;

  const mover = (direccion) => {
    const pista = pistaRef.current;
    if (!pista) return;
    const tarjeta = pista.querySelector(".testi-wrap");
    const paso = tarjeta ? tarjeta.offsetWidth + 24 : pista.clientWidth; // 24 = gap
    pista.scrollBy({ left: direccion * paso, behavior: "smooth" });
  };

  return (
    <section id="testimonios" className="testis">
      <div className="testis__inner">
        <header
          ref={refCabecera}
          className={`testis__cabecera reveal ${
            cabeceraVisible ? "reveal--visible" : ""
          }`}
        >
          <p className="testis__eyebrow">{TEXTOS.eyebrow}</p>
          <h2 className="testis__titulo">
            {TEXTOS.titulo}
            <span className="testis__titulo-acento">{TEXTOS.tituloAcento}</span>
          </h2>
          {testimonios.length > 0 && (
            <p className="testis__texto">{TEXTOS.texto}</p>
          )}
        </header>

        {testimonios.length === 0 ? (
          <div
            ref={refVacio}
            className={`testis__vacio reveal ${vacioVisible ? "reveal--visible" : ""}`}
          >
            <p className="testis__vacio-titulo">{TEXTOS.vacioTitulo}</p>
            <p className="testis__vacio-texto">{TEXTOS.vacioTexto}</p>
            <a
              className="btn btn--amarillo"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              {TEXTOS.vacioBoton}
            </a>
          </div>
        ) : (
          <div className="testis__carrusel">
            <button
              type="button"
              className="testis__flecha testis__flecha--izq"
              onClick={() => mover(-1)}
              aria-label="Testimonio anterior"
            >
              ‹
            </button>

            <div className="testis__pista" ref={pistaRef}>
              {testimonios.map((t, i) => (
                <TestimonioFotos
                  key={i}
                  antes={t.antes}
                  despues={t.despues}
                  frase={t.frase}
                  nombre={t.nombre}
                  detalle={t.detalle}
                  index={i}
                />
              ))}
            </div>

            <button
              type="button"
              className="testis__flecha testis__flecha--der"
              onClick={() => mover(1)}
              aria-label="Testimonio siguiente"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonios;