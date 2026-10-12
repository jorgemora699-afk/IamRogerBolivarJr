import trainerConfig from "../config/trainerConfig";
import "../footer.css";

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const IconoInstagram = (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const IconoCorreo = (
  <svg {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7.5 8 6 8-6" />
  </svg>
);

function Footer() {
  const { nombre, logoUrl, hero, instagramUrl, email } = trainerConfig;

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

        {(instagramUrl || email) && (
          <div className="site-footer__contactos">
            {instagramUrl && (
              <a
                className="site-footer__contacto"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram ${usuario}`}
              >
                <span className="site-footer__contacto-icono">{IconoInstagram}</span>
                <span className="site-footer__contacto-texto">{usuario}</span>
              </a>
            )}

            {email && (
              <a
                className="site-footer__contacto"
                href={`mailto:${email}`}
                aria-label={`Correo ${email}`}
              >
                <span className="site-footer__contacto-icono">{IconoCorreo}</span>
                <span className="site-footer__contacto-texto">{email}</span>
              </a>
            )}
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