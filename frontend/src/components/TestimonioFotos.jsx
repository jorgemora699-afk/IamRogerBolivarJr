import { useScrollReveal } from "../hooks/useScrollReveal";

function TestimonioFotos({ antes, despues, index = 0 }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`testimonio-fotos reveal ${visible ? "reveal--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <img className="testimonio-foto" src={antes} alt="Antes" />
      <img className="testimonio-foto" src={despues} alt="Después" />
    </div>
  );
}

export default TestimonioFotos;