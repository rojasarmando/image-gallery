# Beaches of Venezuela — Gallery

Photographic gallery of Venezuelan tourist sites, migrated to a modern static site with **Astro**.

Originally a PHP + Bootstrap 3 project (2017, Cátedra Bolivariana), rebuilt in 2026 with a dark cinematic aesthetic: asymmetric gallery, native lightbox with keyboard support, smooth scroll animations, and zero frameworks beyond Astro.

## Stack

- **Astro 5** (static, no integrations)
- Hand-written modern CSS (custom properties, grid, `aspect-ratio`, `backdrop-filter`)
- Vanilla TypeScript for the lightbox and animations
- Native `<dialog>` for the lightbox (prev/next, Esc, arrows, scroll lock)

## Content

7 Venezuelan sites with title, image, and review in Spanish, defined in `src/data/sitios.ts` — a single source of truth for the whole site.

## Commands

```bash
npm install     # install dependencies
npm run dev     # development server (http://localhost:4321)
npm run build   # static build to dist/
npm run preview # preview the build
```

## Structure

```
src/
  data/sitios.ts        # gallery content (edit here)
  layouts/BaseLayout.astro
  pages/index.astro     # hero + gallery + lightbox + footer
  scripts/gallery.ts    # lightbox, scroll reveal, header state
  styles/global.css     # full theme
public/
  img/                  # gallery images
```

## Credits

Armando José Rojas Querales — 2017 · 2026

---

**Other languages:** [Español](docs/README.es.md) · [Français](docs/README.fr.md) · [Português](docs/README.pt.md) · [中文](docs/README.zh.md)
