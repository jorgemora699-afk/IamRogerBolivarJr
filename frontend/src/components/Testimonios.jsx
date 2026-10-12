import { useRef } from "react";
import trainerConfig from "../config/trainerConfig";
import TestimonioFotos from "./TestimonioFotos";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../testimonios.css";

// ...TEXTOS igual que antes...

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
    // ...cabecera y bloque vacío igual que antes...

    // Reemplaza SOLO el <div className="testis__grid"> por esto:
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
  );
}