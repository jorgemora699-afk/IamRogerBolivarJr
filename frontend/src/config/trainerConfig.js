const trainerConfig = {
  slug: "roger-bolivar",
  apiKey: import.meta.env.VITE_TRAINER_API_KEY,

  nombre: "IamRogerBolivarJr",
  whatsapp: "573026036066",
  appStoreUrl: "https://apps.apple.com/app/fittrack-app/id6783998522",

  logoUrl: "/images/home/logo1.png",

  colores: {
    primario: "#0D0D0D",
    secundario: "#4A4A4A",
    fondo: "#F5F5F5",
    texto: "#141414",
  },

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
    {
      id: "proteina",
      nombre: "Proteína",
      descripcion: "Whey protein para tu recuperación muscular",
      imagen: "/images/products/pexels-itslauravillela-31555272.jpg",
    },
    {
      id: "creatina",
      nombre: "Creatina",
      descripcion: "Creatina monohidratada para fuerza y rendimiento",
      imagen: "/images/products/Legacy.png",
    },
  ],
};

export default trainerConfig;