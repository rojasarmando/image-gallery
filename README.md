# Playas de Venezuela — Galería

Galería fotográfica de sitios turísticos de Venezuela, migrada a un sitio estático moderno con **Astro**.

Originalmente un proyecto PHP + Bootstrap 3 (2017, Cátedra Bolivariana), reconstruido en 2026 con una estética cinematográfica oscura: galería asimétrica, lightbox nativo con teclado, animaciones de scroll suaves y cero frameworks más allá de Astro.

## Stack

- **Astro 5** (estático, sin integraciones)
- CSS moderno a mano (custom properties, grid, `aspect-ratio`, `backdrop-filter`)
- TypeScript vanilla para el lightbox y las animaciones
- `<dialog>` nativo para el lightbox (prev/next, Esc, flechas, bloqueo de scroll)

## Contenido

7 sitios venezolanos con título, imagen y reseña en español, definidos en `src/data/sitios.ts` — una sola fuente de verdad para todo el sitio.

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:4321)
npm run build   # build estático en dist/
npm run preview # previsualizar el build
```

## Estructura

```
src/
  data/sitios.ts        # contenido de la galería (editar aquí)
  layouts/BaseLayout.astro
  pages/index.astro     # hero + galería + lightbox + footer
  scripts/gallery.ts    # lightbox, scroll reveal, estado del header
  styles/global.css     # tema completo
public/
  img/                  # imágenes de la galería
```

## Créditos

Armando José Rojas Querales — 2017 · 2026
