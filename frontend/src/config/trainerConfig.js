const trainerConfig = {
  slug: "juan-perez",              // debe coincidir con el `slug` en la BD
  apiKey: import.meta.env.VITE_TRAINER_API_KEY,

  nombre: "Juan Pérez",
  tagline: "Entrenamiento y nutrición personalizada",
  whatsapp: "573000000000",        // sin '+' ni espacios, formato que usa wa.me

  colores: {
    primario: "#E10600",   // rojo, como en MTZ Proyect
    fondo: "#F5F0EA",
    texto: "#1A1A1A",
  },

  planes: [
    {
      id: "inicial",
      nombre: "Plan Inicial",
      precioCOP: 100000,
      precioUSD: 31,
      descripcion: "Asesoría única",
      incluye: ["Entrenamiento personalizado", "Soporte nutricional"],
      noIncluye: ["Seguimiento vía WhatsApp", "Videollamadas privadas"],
    },
    {
      id: "mensual",
      nombre: "Plan Mensual",
      precioCOP: 200000,
      precioUSD: 62,
      destacado: true,
      descripcion: "Seguimiento continuo",
      incluye: [
        "Entrenamiento personalizado",
        "Soporte nutricional",
        "Seguimiento vía WhatsApp",
      ],
      noIncluye: ["Videollamadas privadas"],
    },
  ],

  reglas: [
    "No trabajo con dietas restrictivas o extremas.",
    "No trabajo con prohibiciones de ningún alimento. Solo se informa y se aconseja lo más favorable, quedando la decisión en uno mismo.",
    "Vamos a registrar tu progreso cada 10 días, pero me puedes escribir a cualquier hora del día por alguna duda.",
  ],
};

export default trainerConfig;