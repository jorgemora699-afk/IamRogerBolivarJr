import { useState } from "react";
import ReservaModal from "./components/ReservaModal";
import trainerConfig from "./config/trainerConfig";
import PlanCard from "./components/PlanCard";
import ProductoCard from "./components/ProductoCard";
import "./styles.css";

function scrollToSection(id, closeMenu) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  closeMenu();
}

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);

  const cssVars = {
    "--color-primario": trainerConfig.colores.primario,
    "--color-secundario": trainerConfig.colores.secundario,
    "--color-fondo": trainerConfig.colores.fondo,
    "--color-texto": trainerConfig.colores.texto,
  };

  const cerrarMenu = () => setMenuAbierto(false);
  const iniciales = "RB";

  return (
    <div className="app" style={cssVars}>
      <header className="header">
        <div className="marca">
          {trainerConfig.logoUrl ? (
            <img
              src={trainerConfig.logoUrl}
              alt={trainerConfig.nombre}
              className="marca-logo"
            />
          ) : (
            <span className="marca-monograma">{iniciales}</span>
          )}
          <span className="marca-nombre">{trainerConfig.nombre}</span>
        </div>
        <button
          className="menu-boton"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {menuAbierto && (
          <>
            <div className="menu-overlay" onClick={cerrarMenu} />
            <nav className="menu-dropdown">
              <button onClick={() => scrollToSection("planes", cerrarMenu)}>
                <span>Planes</span>
              </button>
              <button onClick={() => scrollToSection("testimonios", cerrarMenu)}>
                <span>Testimonios</span>
              </button>
              <button onClick={() => scrollToSection("contacto", cerrarMenu)}>
                <span>Contacto</span>
              </button>
            </nav>
          </>
        )}
      </header>

      {/* Home */}
      <section id="home" className="home">
        <p className="home-label">ENTRENADOR PERSONAL — MEDELLÍN</p>
        <h2 className="home-titulo">
          <span className="home-titulo__leve">¿Qué</span>
          <span className="home-titulo__fuerte">deseas ver?</span>
        </h2>

         <div className="home-tarjetas">
          {trainerConfig.home.tarjetas.map((tarjeta) => (
            <button
              key={tarjeta.id}
              className="home-tarjeta"
              style={{ backgroundImage: `url(${tarjeta.imagen})` }}
              onClick={() => scrollToSection(tarjeta.scrollTo, cerrarMenu)}
            >
              <span className="home-tarjeta__overlay" />
              <span className="home-tarjeta__titulo">{tarjeta.titulo}</span>
              <span className="home-tarjeta__subtitulo">{tarjeta.subtitulo}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="planes-seccion">
        <p className="seccion-eyebrow">— PLANES</p>
        <h2 className="seccion-titulo">Elige tu plan</h2>
        <div className="planes">
          {trainerConfig.planes.map((plan) => (
            <PlanCard key={plan.id} plan={plan} onElegir={setPlanSeleccionado} />
          ))}
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="productos-seccion">
        <p className="seccion-eyebrow">— PRODUCTOS</p>
        <h2 className="seccion-titulo">Suplementos</h2>
        <div className="productos">
          {trainerConfig.productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

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
                <div key={i} className="testimonio-fotos">
                  <img className="testimonio-foto" src={t.antes} alt="Antes" />
                  <img className="testimonio-foto" src={t.despues} alt="Después" />
                </div>
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

          
          <a  className="contacto-boton contacto-boton--whatsapp"
            href={`https://wa.me/${trainerConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            Escríbeme por WhatsApp
          </a>

          
          <a  className="contacto-boton contacto-boton--app"
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
    </div>
  );
}

export default App;