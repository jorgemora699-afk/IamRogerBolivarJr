import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useParallax } from "../hooks/useParallax";

function HomeTarjeta({ tarjeta, index, onClick }) {
  const [ref, visible] = useScrollReveal();
  const [parallaxRef, offset] = useParallax(0.12);
  const [cargada, setCargada] = useState(false);

  const setRefs = (el) => {
    ref.current = el;
    parallaxRef.current = el;
  };

  return (
    <button
      ref={setRefs}
      className={`home-tarjeta reveal ${visible ? "reveal--visible" : ""}`}
      style={{
        backgroundImage: cargada ? `url(${tarjeta.imagen})` : "none",
        backgroundPosition: `center calc(50% + ${offset}px)`,
        transitionDelay: `${index * 0.1}s`,
      }}
      onClick={onClick}
    >
      {!cargada && <div className="skeleton skeleton--absoluto" />}
      <img
        src={tarjeta.imagen}
        alt=""
        aria-hidden="true"
        onLoad={() => setCargada(true)}
        style={{ display: "none" }}
      />
      <span className="home-tarjeta__overlay" />
      <span className="home-tarjeta__titulo">{tarjeta.titulo}</span>
      <span className="home-tarjeta__subtitulo">{tarjeta.subtitulo}</span>
    </button>
  );
}

export default HomeTarjeta;