import { useEffect, useState } from "react";
import trainerConfig from "../config/trainerConfig";

const LINKS = [
  { id: "home", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "planes", label: "Planes" },
  { id: "productos", label: "Productos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
];

function Header({ onNavigate }) {
  const [abierto, setAbierto] = useState(false);
  const [solido, setSolido] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setAbierto(false);
    const onResize = () => window.innerWidth >= 900 && setAbierto(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const ir = (id) => {
    setAbierto(false);
    onNavigate(id);
  };

  const waUrl = `https://wa.me/${trainerConfig.whatsapp}`;

  return (
    <header
      className={`site-header ${solido ? "site-header--solido" : ""} ${
        abierto ? "site-header--abierto" : ""
      }`}
    >
      <div className="site-header__inner">
        <button className="brand" onClick={() => ir("home")} aria-label="Ir al inicio">
          {trainerConfig.logoUrl && (
            <img src={trainerConfig.logoUrl} alt="" className="brand__logo" />
          )}
        </button>

        <nav className="site-nav" aria-label="Principal">
          {LINKS.map((l) => (
            <button key={l.id} className="site-nav__link" onClick={() => ir(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <a
          className="btn btn--amarillo btn--sm site-header__cta"
          href={waUrl}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <button
          className={`nav-toggle ${abierto ? "nav-toggle--activo" : ""}`}
          onClick={() => setAbierto((v) => !v)}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`nav-mobile ${abierto ? "nav-mobile--abierto" : ""}`}
        aria-label="Menú móvil"
      >
        {LINKS.map((l) => (
          <button key={l.id} className="nav-mobile__link" onClick={() => ir(l.id)}>
            {l.label}
          </button>
        ))}
        <a
          className="btn btn--amarillo nav-mobile__cta"
          href={waUrl}
          target="_blank"
          rel="noreferrer"
        >
          Hablar por WhatsApp
        </a>
      </nav>
    </header>
  );
}

export default Header;