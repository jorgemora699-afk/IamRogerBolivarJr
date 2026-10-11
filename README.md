# Roger Bolívar | Entrenador Personal 💪

Sitio web profesional de un entrenador personal, con presentación de servicios, planes de asesoría y formulario de contacto para captar nuevos clientes. Es uno de los frontends de una **plataforma multi-entrenador**: cada entrenador tiene su propio sitio, con diseño y dominio propios, sobre un backend y una base de datos compartidos.


## Problema

Un entrenador independiente necesita presencia profesional en internet, pero muchas veces solo cuenta con redes sociales. Sin un sitio propio es difícil mostrar sus planes, y los interesados terminan escribiendo por chat sin dejar información útil para armar su rutina.

## Funcionalidades

- Landing con presentación del entrenador y sus servicios: `[secciones reales: sobre mí, resultados, testimonios, etc.]`.
- Listado de planes de asesoría con su precio, cargado desde la API.
- Formulario de reserva que registra los datos del cliente (nombre, correo, WhatsApp, edad, peso, estatura, objetivo y plazo) como un *lead* en la base de datos.
- Diseño responsive pensado principalmente para celular.
- Contenido del entrenador cargado dinámicamente por su `slug`, sin textos fijos en el código.
- `[botón de WhatsApp, galería, enlace a redes... agrega lo que tenga]`

## Arquitectura multi-entrenador

Todos los sitios de la plataforma comparten un único backend y una única base de datos, pero cada uno es un frontend independiente, con su propio layout y su propio despliegue:

```
Sitio Roger Bolívar ─┐
Sitio Entrenador B  ─┼──►  API REST Flask (compartida)  ──►  PostgreSQL
Sitio Entrenador C  ─┘     filtra todo por trainer slug
```

Endpoints públicos que consume este sitio:

| Método | Ruta | Uso |
|---|---|---|
| GET | `/api/trainers/<slug>` | Datos del entrenador |
| GET | `/api/trainers/<slug>/plans` | Planes de asesoría |
| POST | `/api/trainers/<slug>/leads` | Envío del formulario de reserva |


## Modelo de datos (backend)

- `trainers`: datos y configuración de cada entrenador, identificado por su `slug`.
- `plans`: planes de asesoría asociados a un entrenador.
- `leads`: solicitudes de clientes potenciales asociadas a un entrenador.

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | `[React + Vite]` |
| Estilos | `[CSS / Tailwind]` |
| API | Flask (backend compartido) |
| Base de datos | PostgreSQL |
| Despliegue | Vercel (frontend) y Railway (API) |
| Dominio | GoDaddy |

## Estructura del proyecto

```
[ajusta a tu estructura real]
roger-bolivar-web/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/      # llamadas a la API
├── .env.example
└── package.json
```

## Instalación local

**Requisitos:** Node 18+ y el backend corriendo (local o desplegado).

```bash
npm install
cp .env.example .env
npm run dev
```


## Autor

**Jorge Alejandro Mora**
