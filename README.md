# Lust

Frontend de Lust, una plataforma de contenido para adultos (+18). Construido con React + Vite, con un sistema de diseño propio ("Neon Nightlife") hecho en CSS puro.

## Stack

- React 18 + Vite 5
- React Router v6 (routing 100% client-side)
- Bootstrap / `react-bootstrap` (dependencia heredada del diseño anterior, ya no es el sistema de diseño principal)
- CSS propio en [`css/neon-theme.css`](css/neon-theme.css) para todo el diseño visual actual
- Tipografías Google Fonts: `Unbounded` (títulos) y `Plus Jakarta Sans` (texto)

## Requisitos

- Node.js
- npm

## Desarrollo

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

## Scripts disponibles

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción en `dist/`
- `npm run preview` — sirve el build de producción localmente
- `npm run lint` — ESLint (`--max-warnings 0`, cualquier warning falla el comando)

No hay framework de tests configurado en este proyecto.

## Flujo de la app

**Acceso** (siempre empieza acá):
- `/` — Verificación de edad
- `/login`, `/registro`, `/recuperar-contrasena` — Autenticación

**Producto** (asume que ya "iniciaste sesión"):
- `/home`, `/explorar`, `/perfil`, `/contenido`, `/suscripcion`, `/mensajes`, `/mi-cuenta`, `/notificaciones`, `/terminos`

### Login de prueba

Todavía no hay backend ni autenticación real conectada. Para entrar y ver las pantallas de producto, usá:

- Correo: `demo@lust.com`
- Contraseña: `lust1234`

## Despliegue

Pensado para desplegar en Vercel: detecta `npm run build` automáticamente a partir de `package-lock.json` (npm), sin configuración adicional.

## Estado del proyecto

- No hay backend, base de datos ni procesador de pagos conectados todavía — todo el contenido (creadoras, mensajes, precios) es de ejemplo/estático.
- El login de arriba es un mock en el frontend, no autenticación real.
