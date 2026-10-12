const trainerConfig = {
  slug: "roger-bolivar",
  apiKey: import.meta.env.VITE_TRAINER_API_KEY,

  nombre: "IamRogerBolivarJr",
  whatsapp: "573026036066",
  appStoreUrl: "https://apps.apple.com/app/fittrack-app/id6783998522",

  logoUrl: "/images/home/logo1.png",

  // Paleta: negro, gris, blanco y amarillo.
  // (primario/secundario/fondo/texto se mantienen porque las secciones
  // que aún no rediseñamos los siguen usando)
  colores: {
    primario: "#0D0D0D",
    secundario: "#4A4A4A",
    fondo: "#F5F5F5",
    texto: "#141414",
    acento: "#FFD21F",
    grisClaro: "#B8B8BD",
  },

  // Contenido del hero (pantalla principal)
  hero: {
    etiqueta: "Entrenamiento · Nutrición · Resultados",
    lineas: ["Tu mejor", "versión"],
    destacada: "Empieza aquí",
    descripcion:
      "Te ayudo a alcanzar tus objetivos con planes personalizados de entrenamiento, nutrición y suplementación, para que logres un cuerpo más fuerte, saludable y una mejor versión de ti.",
    imagen: "/images/home/ase.png",
    botonPrincipal: "Hablar por WhatsApp",
    botonSecundario: "Conoce mis paquetes",
    mensajeWhatsapp: "Hola, quiero información sobre tus planes",
    beneficios: [
      { icono: "energia", texto: "Más energía" },
      { icono: "rendimiento", texto: "Mejor rendimiento" },
      { icono: "salud", texto: "Cuerpo saludable" },
      { icono: "resultados", texto: "Resultados reales" },
    ],
  },

  // Ya no se usa en el hero nuevo; se puede borrar más adelante
  home: {
    titulo: "¿QUÉ DESEAS VER?",
    tarjetas: [
      {
        id: "asesorias",
        titulo: "Asesorías",
        subtitulo: "Entrenamiento y nutrición personalizada",
        scrollTo: "planes",
        imagen: "/images/home/ase.png",
      },
      {
        id: "productos",
        titulo: "Productos",
        subtitulo: "Conoce lo que tengo para ti",
        scrollTo: "productos",
        imagen: "/images/home/suplementos-gym.png",
      },
    ],
  },

  planes: [
    {
      id: "smart",
      nombre: "Plan Junior",
      precioCOP: 200000,
      descripcion: "Asesoría",
      color: "gris",
      incluye: ["Asesoría personalizada", "Acesso a FitTrack"],
    },
    {
      id: "black",
      nombre: "Plan Premium",
      precioCOP: 300000,
      destacado: true,
      descripcion: "Entrenamiento guiado",
      incluye: [
        "Entrenamiento presencial o virtual personalizado",
        "Acesso a FitTrack",
      ],
    },
    {
      id: "deluxe",
      nombre: "Plan Deluxe",
      precioCOP: 400000,
      descripcion: "La experiencia completa",
      color: "dorado",
      incluye: [
        "Entrenamiento presencial o virtual personalizado",
        "Acesso a FitTrack",
        "Soporte nutricional",
      ],
    },
  ],

  formularioReserva: [
    { id: "plan_seleccionado", label: "Plan seleccionado", tipo: "readonly" },
    { id: "nombre_completo", label: "Nombre completo", tipo: "text" },
    { id: "whatsapp", label: "Número de WhatsApp", tipo: "tel" },
    { id: "peso_kg", label: "Peso (kg)", tipo: "number" },
    { id: "edad", label: "Edad", tipo: "number" },
    { id: "estatura_cm", label: "Altura (cm)", tipo: "number" },
    { id: "objetivo", label: "¿Qué objetivo tienes?", tipo: "text" },
    {
      id: "entrena_en",
      label: "¿Entrenas en casa o gimnasio?",
      tipo: "select",
      opciones: ["Casa", "Gimnasio"],
    },
    { id: "frecuencia_semanal", label: "Frecuencia semanal", tipo: "number" },
  ],

  testimonios: [
    {
      antes: "/images/testimonios/cliente1-antes.png",
      despues: "/images/testimonios/cliente1-despues.png",
    },
  ],

  productos: [
  ],

  categoriasSuplementos: [
    {
      id: "masa-muscular",
      nombre: "Aumento de masa muscular",
      descripcion: "Suplementos para ganar músculo y fuerza",
      imagen: "/images/products/aumento.png",
      mensajeInteres: "aumento de masa muscular",
    },
    {
      id: "adelgazar",
      nombre: "Pérdida de grasa",
      descripcion: "Suplementos para pérdida de grasa",
      imagen: "/images/products/quemar.png",
      mensajeInteres: "pérdida de grasa / adelgazar",
    },
  ],
};

export default trainerConfig;