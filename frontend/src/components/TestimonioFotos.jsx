import { useScrollReveal } from "../hooks/useScrollReveal";

// Campos opcionales del testimonio: `frase`, `nombre` y `detalle`
// (por ejemplo: frase: "Me ayudó muchísimo", nombre: "Carlos", detalle: "−12 kg en 3 meses").
function TestimonioFotos({ antes, despues, frase, nombre, detalle, index = 0 }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`testi-wrap reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${(index % 2) * 0.12}s` }}
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

        {(frase || nombre || detalle) && (
          <div className="testi__pie">
            {frase && <blockquote className="testi__frase">{frase}</blockquote>}
            {nombre && <p className="testi__nombre">{nombre}</p>}
            {detalle && <p className="testi__detalle">{detalle}</p>}
          </div>
        )}
      </article>
    </div>
  );
}

export default TestimonioFotos;