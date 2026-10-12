import { useState } from "react";
import ReservaModal from "./components/ReservaModal";
import trainerConfig from "./config/trainerConfig";
import "./styles.css";
import "./base.css"; // siempre después de styles.css
import "./modales.css"; // modales oscuros, siempre después de styles.css y base.css
import SuplementoConfirmModal from "./components/SuplementoConfirmModal";
import WhatsAppFlotante from "./components/WhatsAppFlotante";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SobreMi from "./components/Sobremi";
import Planes from "./components/Planes";
import Suplementos from "./components/Suplementos";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

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

      <Planes onElegir={setPlanSeleccionado} />

      <Suplementos onCategoria={setCategoriaSeleccionada} />

      <Testimonios />

      <SobreMi />

      <Contacto />

      <Footer />

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