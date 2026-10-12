import { useEffect, useState } from "react";
import trainerConfig from "../config/trainerConfig";

const LINKS = [
  { id: "home", label: "Inicio" },
  { id: "planes", label: "Planes" },
  { id: "productos", label: "Productos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "sobre-mi", label: "Sobre mí" },
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
      </nav>
    </header>
  );
}

export default Header;