import { useState } from "react";
import ReservaModal from "./components/ReservaModal";
import trainerConfig from "./config/trainerConfig";
import "./styles.css";
import "./base.css"; // siempre después de styles.css
import SuplementoConfirmModal from "./components/SuplementoConfirmModal";
import TestimonioFotos from "./components/TestimonioFotos";
import WhatsAppFlotante from "./components/WhatsAppFlotante";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Planes from "./components/Planes";
import Suplementos from "./components/Suplementos";

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

      {/* Testimonios */}
      <section id="testimonios" className="testimonios-seccion">
        <p className="seccion-eyebrow">— TESTIMONIOS</p>
        <h2 className="seccion-titulo">Resultados reales</h2>
        {trainerConfig.testimonios.length === 0 ? (
          <div className="testimonios-vacio">
            <p className="testimonios-vacio__titulo">Muy pronto</p>
            <p className="testimonios-vacio__texto">
              Estoy reuniendo las historias de mis clientes. Si ya entrenas
              conmigo, escríbeme y sé el primero en aparecer aquí.
            </p>
          </div>
        ) : (
          <div className="testimonios">
            {trainerConfig.testimonios.map((t, i) => (
              <TestimonioFotos key={i} antes={t.antes} despues={t.despues} index={i} />
            ))}
          </div>
        )}
      </section>

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