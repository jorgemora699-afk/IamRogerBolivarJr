import { useState } from "react";
import ReservaModal from "./components/ReservaModal";
import trainerConfig from "./config/trainerConfig";
import "./styles.css";
import "./base.css"; // siempre después de styles.css
import SuplementoConfirmModal from "./components/SuplementoConfirmModal";
import WhatsAppFlotante from "./components/WhatsAppFlotante";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Planes from "./components/Planes";
import Suplementos from "./components/Suplementos";
import Testimonios from "./components/Testimonios";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const cssVars = {
    "--color-primario": trainerConfig.colores.primario,
    "--color-secundario": trainerConfig.colores.secundario,
    "--color-fondo": trainerConfig.colores.fondo,
    "--color-texto": trainerConfig.colores.texto,
    "--amarillo": trainerConfig.colores.acento,
    "--gris-300": trainerConfig.colores.grisClaro,
  };

  return (
    <div className="app" style={cssVars}>
      <Header onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />

      <SobreMi />

      <Planes onElegir={setPlanSeleccionado} />

      <Suplementos onCategoria={setCategoriaSeleccionada} />

      <Testimonios />

      {/* Contacto */}
      <section id="contacto" className="contacto-seccion">
        <p className="contacto-eyebrow">— CONTACTO</p>
        <h2 className="contacto-titulo">¿Listo para empezar tu cambio?</h2>
        <p className="contacto-texto">
          Elige tu plan, cuéntame tus objetivos y hablamos directo por WhatsApp.
        </p>

        <a
          className="contacto-boton contacto-boton--whatsapp"
          href={`https://wa.me/${trainerConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          Escríbeme por WhatsApp
        </a>

        <a
          className="contacto-boton contacto-boton--app"
          href={trainerConfig.appStoreUrl}
          target="_blank"
          rel="noreferrer"
        >
          Descarga la App
        </a>
      </section>

      {planSeleccionado && (
        <ReservaModal plan={planSeleccionado} onClose={() => setPlanSeleccionado(null)} />
      )}

      {categoriaSeleccionada && (
        <SuplementoConfirmModal
          categoria={categoriaSeleccionada}
          onClose={() => setCategoriaSeleccionada(null)}
        />
      )}

      <WhatsAppFlotante />
    </div>
  );
}

export default App;