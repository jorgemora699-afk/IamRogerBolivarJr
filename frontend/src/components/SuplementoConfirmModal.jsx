import { useState } from "react";
import trainerConfig from "../config/trainerConfig";

function SuplementoConfirmModal({ categoria, onClose }) {
  const [paso, setPaso] = useState("confirmacion"); // confirmacion | enviando

  const construirMensajeWhatsapp = () =>
    `Hola ${trainerConfig.nombre}, quisiera información sobre suplementos para ${categoria.mensajeInteres}.`;

  const handleConfirmar = () => {
    setPaso("enviando");
    const mensaje = encodeURIComponent(construirMensajeWhatsapp());
    window.open(`https://wa.me/${trainerConfig.whatsapp}?text=${mensaje}`, "_blank");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="modal__handle" />
        <button className="modal__cerrar" onClick={onClose} aria-label="Cerrar">✕</button>

        {paso === "confirmacion" && (
          <div>
            <h3 className="modal__titulo">Confirmar consulta</h3>
            <p className="modal__subtitulo">
              ¿Quieres recibir información sobre suplementos para <strong>{categoria.nombre.toLowerCase()}</strong>?
              Se abrirá WhatsApp con {trainerConfig.nombre}.
            </p>

            <button className="modal__boton" onClick={handleConfirmar}>
              Confirmar y preguntar por WhatsApp
            </button>
          </div>
        )}

        {paso === "enviando" && (
          <div className="modal__enviando">
            <span className="spinner" />
            <p>Abriendo WhatsApp...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuplementoConfirmModal;