import { useScrollReveal } from "../hooks/useScrollReveal";

// Soporta los campos opcionales `nombre` y `detalle` del testimonio
// (por ejemplo: nombre: "Carlos", detalle: "−12 kg en 3 meses").
function TestimonioFotos({ antes, despues, nombre, detalle, index = 0 }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`testi-wrap reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <article className="testi">
        <div className="testi__fotos">
          <figure className="testi__foto">
            <img className="testi__img testi__img--antes" src={antes} alt="Antes" loading="lazy" />
            <figcaption className="testi__etiqueta">Antes</figcaption>
          </figure>
          <figure className="testi__foto">
            <img className="testi__img" src={despues} alt="Después" loading="lazy" />
            <figcaption className="testi__etiqueta testi__etiqueta--despues">
              Después
            </figcaption>
          </figure>
        </div>

        {(nombre || detalle) && (
          <div className="testi__pie">
            {nombre && <p className="testi__nombre">{nombre}</p>}
            {detalle && <p className="testi__detalle">{detalle}</p>}
          </div>
        )}
      </article>
    </div>
  );
}

export default TestimonioFotos;