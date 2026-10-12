import { useEffect, useState } from "react";
import trainerConfig from "../config/trainerConfig";
import "../whatsapp-flotante.css";

function WhatsAppFlotante() {
  const [visible, setVisible] = useState(false);

  // Aparece después de bajar un poco, para no competir con el Hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mensaje =
    trainerConfig.hero?.mensajeWhatsapp ||
    "Hola, quiero información sobre tus planes";

  const url = `https://wa.me/${trainerConfig.whatsapp}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      className={`wa-fab ${visible ? "wa-fab--visible" : ""}`}
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbeme por WhatsApp"
    >
      <span className="wa-fab__label">¿Hablamos?</span>

      <span className="wa-fab__circulo">
        <svg viewBox="0 0 24 24" className="wa-fab__icono" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.16c-.24.68-1.39 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 1.99.88 2.13.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
        </svg>
      </span>
    </a>
  );
}

export default WhatsAppFlotante;