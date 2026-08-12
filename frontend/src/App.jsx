import trainerConfig from "./config/trainerConfig";
import PlanCard from "./components/PlanCard";
import "./styles.css";

function App() {
  const cssVars = {
    "--color-primario": trainerConfig.colores.primario,
    "--color-fondo": trainerConfig.colores.fondo,
    "--color-texto": trainerConfig.colores.texto,
  };

  return (
    <div className="app" style={cssVars}>
      <header className="header">
        <h1>{trainerConfig.nombre}</h1>
      </header>

      <section className="hero">
        <h2>{trainerConfig.tagline}</h2>
      </section>

      <section className="reglas">
        <div className="reglas-box">
          <p className="reglas-titulo">⚠ Importante</p>
          <p>Es fundamental que se entienda mi modelo de trabajo:</p>
          <ul>
            {trainerConfig.reglas.map((regla, i) => (
              <li key={i}>{regla}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="planes">
        {trainerConfig.planes.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </section>
    </div>
  );
}

export default App;