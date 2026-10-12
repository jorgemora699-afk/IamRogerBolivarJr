import trainerConfig from "../config/trainerConfig";
import "../footer.css";

const LINKS = [
  { id: "home", label: "Inicio" },
  { id: "planes", label: "Planes" },
  { id: "productos", label: "Productos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

const IconoInstagram = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

function Footer({ onNavigate }) {
  const { nombre, logoUrl, hero, instagramUrl } = trainerConfig;

  // https://www.instagram.com/iamrogerbolivarjr/ -> @iamrogerbolivarjr
  const usuario = instagramUrl
    ? `@${instagramUrl.split("/").filter(Boolean).pop()}`
    : "";

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__marca">
          {logoUrl && (
            <img src={logoUrl} alt={nombre} className="site-footer__logo" />
          )}
          {hero?.etiqueta && (
            <p className="site-footer__lema">{hero.etiqueta}</p>
          )}
        </div>

        <nav className="site-footer__nav" aria-label="Pie de página">
          {LINKS.map((l) => (
            <button
              key={l.id}
              className="site-footer__link"
              onClick={() => onNavigate(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {instagramUrl && (
          <div className="site-footer__redes">
            <a
              className="site-footer__instagram"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${usuario}`}
            >
              <span className="site-footer__instagram-icono">{IconoInstagram}</span>
              <span className="site-footer__instagram-texto">{usuario}</span>
            </a>
          </div>
        )}
      </div>

      <div className="site-footer__legal">
        <p>
          © {new Date().getFullYear()} {nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;