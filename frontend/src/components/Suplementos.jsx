import trainerConfig from "../config/trainerConfig";
import CategoriaSuplementoCard from "./CategoriaSuplementoCard";
import ProductoCard from "./ProductoCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../suplementos.css";

// Valores por defecto; se pueden cambiar con trainerConfig.seccionSuplementos
const TEXTOS = {
  eyebrow: "Suplementos",
  titulo: "Productos de",
  tituloAcento: "calidad",
  texto:
    "Elige la categoría que va con tu objetivo y conoce lo que tengo para ti.",
  ...(trainerConfig.seccionSuplementos || {}),
};

function Suplementos({ onCategoria }) {
  const [refCabecera, cabeceraVisible] = useScrollReveal();
  const { categoriasSuplementos = [], productos = [] } = trainerConfig;

  return (
    <section id="productos" className="supls">
      <div className="supls__inner">
        <header
          ref={refCabecera}
          className={`supls__cabecera reveal ${
            cabeceraVisible ? "reveal--visible" : ""
          }`}
        >
          <p className="supls__eyebrow">{TEXTOS.eyebrow}</p>
          <h2 className="supls__titulo">
            {TEXTOS.titulo}
            <span className="supls__titulo-acento">{TEXTOS.tituloAcento}</span>
          </h2>
          <p className="supls__texto">{TEXTOS.texto}</p>
        </header>

        <div className="supls__grid">
          {categoriasSuplementos.map((categoria, i) => (
            <CategoriaSuplementoCard
              key={categoria.id}
              categoria={categoria}
              index={i}
              onClick={onCategoria}
            />
          ))}
          {productos.map((producto, i) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              index={categoriasSuplementos.length + i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suplementos;