import { useState } from "react";
import trainerConfig from "../config/trainerConfig";

const datosIniciales = {
  nombre_completo: "",
  whatsapp: "",
  peso_kg: "",
  edad: "",
  estatura_cm: "",
  objetivo: "",
  entrena_en: "",
  frecuencia_semanal: "",
};

function ReservaModal({ plan, onClose }) {
  const [paso, setPaso] = useState("form"); // form | confirmacion | enviando
  const [datos, setDatos] = useState(datosIniciales);

  const actualizar = (campo, valor) => setDatos((prev) => ({ ...prev, [campo]: valor }));

  const camposCompletos = datos.nombre_completo.trim() && datos.whatsapp.trim();

  const handleContinuar = (e) => {
    e.preventDefault();
    if (!camposCompletos) return;
    setPaso("confirmacion");
  };

  const construirMensajeWhatsapp = () =>
    `Hola ${trainerConfig.nombre}, quiero reservar el ${plan.nombre}.\n\n` +
    `Nombre: ${datos.nombre_completo}\n` +
    `WhatsApp: ${datos.whatsapp}\n` +
    `Peso: ${datos.peso_kg || "-"} kg\n` +
    `Edad: ${datos.edad || "-"}\n` +
    `Estatura: ${datos.estatura_cm || "-"} cm\n` +
    `Objetivo: ${datos.objetivo || "-"}\n` +
    `Entrena en: ${datos.entrena_en || "-"}\n` +
    `Frecuencia semanal: ${datos.frecuencia_semanal || "-"}`;

  const handleConfirmar = async () => {
    setPaso("enviando");
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/trainers/reservas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Trainer-Key": trainerConfig.apiKey,
        },
        body: JSON.stringify({
          plan_seleccionado: plan.nombre,
          nombre_completo: datos.nombre_completo,
          whatsapp: datos.whatsapp,
          peso_kg: datos.peso_kg ? Number(datos.peso_kg) : null,
          edad: datos.edad ? Number(datos.edad) : null,
          estatura_cm: datos.estatura_cm ? Number(datos.estatura_cm) : null,
          objetivo: datos.objetivo,
          entrena_en: datos.entrena_en,
          frecuencia_semanal: datos.frecuencia_semanal ? Number(datos.frecuencia_semanal) : null,
        }),
      });
    } catch (err) {
      console.error("Error guardando reserva:", err);
    }

    const mensaje = encodeURIComponent(construirMensajeWhatsapp());
    window.open(`https://wa.me/${trainerConfig.whatsapp}?text=${mensaje}`, "_blank");
    onClose();
  };

  const opcionesEntreno = ["Casa", "Gimnasio", "Ambas"];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="modal__handle" />
        <button className="modal__cerrar" onClick={onClose} aria-label="Cerrar">✕</button>

        {paso !== "enviando" && (
          <div className="modal__pasos">
            <span className={`modal__paso ${paso === "form" ? "modal__paso--activo" : "modal__paso--hecho"}`} />
            <span className={`modal__paso ${paso === "confirmacion" ? "modal__paso--activo" : ""}`} />
          </div>
        )}

        {paso === "form" && (
          <form onSubmit={handleContinuar}>
            <h3 className="modal__titulo">Reserva tu asesoría</h3>
            <p className="modal__subtitulo">
              Completa este formulario, así puedo conocerte y preparar tu asesoría.
            </p>

            <label className="campo">
                <span>Plan seleccionado</span>
                <div className="campo__readonly">
                    {plan.nombre} — ${plan.precioCOP.toLocaleString("es-CO")} COP/mes
                </div>
            </label>

            <label className="campo">
              <span>Nombre completo</span>
              <input
                type="text"
                value={datos.nombre_completo}
                onChange={(e) => actualizar("nombre_completo", e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </label>

            <label className="campo">
              <span>Número de WhatsApp</span>
              <input
                type="tel"
                value={datos.whatsapp}
                onChange={(e) => actualizar("whatsapp", e.target.value)}
                placeholder="300 458 1980"
                required
              />
            </label>

            <div className="campo-grupo">
              <label className="campo">
                <span>Peso (kg)</span>
                <input type="number" value={datos.peso_kg} onChange={(e) => actualizar("peso_kg", e.target.value)} placeholder="70" />
              </label>
              <label className="campo">
                <span>Edad</span>
                <input type="number" value={datos.edad} onChange={(e) => actualizar("edad", e.target.value)} placeholder="25" />
              </label>
              <label className="campo">
                <span>Estatura (cm)</span>
                <input type="number" value={datos.estatura_cm} onChange={(e) => actualizar("estatura_cm", e.target.value)} placeholder="170" />
              </label>
            </div>

            <label className="campo">
              <span>¿Qué objetivo tienes?</span>
              <input
                type="text"
                value={datos.objetivo}
                onChange={(e) => actualizar("objetivo", e.target.value)}
                placeholder="Ej: bajar grasa, ganar músculo..."
              />
            </label>

            {/* div (no label): si fuera label, tocar el texto marcaba "Casa" sin querer */}
            <div className="campo" role="group" aria-label="¿Entrenas en casa o gimnasio?">
              <span>¿Entrenas en casa o gimnasio?</span>
              <div className="pill-group">
                {opcionesEntreno.map((op) => (
                  <button
                    type="button"
                    key={op}
                    className={`pill ${datos.entrena_en === op ? "pill--activo" : ""}`}
                    onClick={() => actualizar("entrena_en", op)}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            <label className="campo">
              <span>Frecuencia semanal</span>
              <input
                type="number"
                value={datos.frecuencia_semanal}
                onChange={(e) => actualizar("frecuencia_semanal", e.target.value)}
                placeholder="Ej: 4"
              />
            </label>

            <button type="submit" className="modal__boton" disabled={!camposCompletos}>
              Continuar
            </button>
          </form>
        )}

        {paso === "confirmacion" && (
          <div>
            <h3 className="modal__titulo">Confirma tus datos</h3>
            <p className="modal__subtitulo">
              Revisa que todo esté correcto antes de enviarlo a {trainerConfig.nombre} por WhatsApp.
            </p>

            <ul className="resumen">
              <li><span>Plan</span><strong>{plan.nombre}</strong></li>
              <li><span>Nombre</span><strong>{datos.nombre_completo}</strong></li>
              <li><span>WhatsApp</span><strong>{datos.whatsapp}</strong></li>
              <li><span>Peso</span><strong>{datos.peso_kg || "-"} kg</strong></li>
              <li><span>Edad</span><strong>{datos.edad || "-"}</strong></li>
              <li><span>Estatura</span><strong>{datos.estatura_cm || "-"} cm</strong></li>
              <li><span>Objetivo</span><strong>{datos.objetivo || "-"}</strong></li>
              <li><span>Entrena en</span><strong>{datos.entrena_en || "-"}</strong></li>
              <li><span>Frecuencia semanal</span><strong>{datos.frecuencia_semanal || "-"}</strong></li>
            </ul>

            <button className="modal__boton modal__boton--secundario" onClick={() => setPaso("form")}>
              Editar datos
            </button>
            <button className="modal__boton" onClick={handleConfirmar}>
              Confirmar y enviar por WhatsApp
            </button>
          </div>
        )}

        {paso === "enviando" && (
          <div className="modal__enviando">
            <span className="spinner" />
            <p>Enviando tu reserva...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservaModal;