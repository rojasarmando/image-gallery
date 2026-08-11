# Plages du Venezuela — Galerie

Galerie photographique de sites touristiques du Venezuela, migrée vers un site statique moderne avec **Astro**.

À l'origine un projet PHP + Bootstrap 3 (2017, Cátedra Bolivariana), reconstruit en 2026 avec une esthétique cinématographique sombre : galerie asymétrique, lightbox natif avec prise en charge du clavier, animations de défilement fluides et zéro framework en dehors d'Astro.

## Stack technique

- **Astro 5** (statique, sans intégrations)
- CSS moderne écrit à la main (custom properties, grid, `aspect-ratio`, `backdrop-filter`)
- TypeScript vanilla pour le lightbox et les animations
- `<dialog>` natif pour le lightbox (précédent/suivant, Échap, flèches, verrouillage du défilement)

## Contenu

7 sites vénézuéliens avec titre, image et description en espagnol, définis dans `src/data/sitios.ts` — une seule source de vérité pour tout le site.

## Commandes

```bash
npm install     # installer les dépendances
npm run dev     # serveur de développement (http://localhost:4321)
npm run build   # build statique dans dist/
npm run preview # prévisualiser le build
```

## Structure

```
src/
  data/sitios.ts        # contenu de la galerie (à modifier ici)
  layouts/BaseLayout.astro
  pages/index.astro     # hero + galerie + lightbox + footer
  scripts/gallery.ts    # lightbox, scroll reveal, état du header
  styles/global.css     # thème complet
public/
  img/                  # images de la galerie
```

## Crédits

Armando José Rojas Querales — 2017 · 2026

---

**Autres langues :** [English](../README.md) · [Español](README.es.md) · [Português](README.pt.md) · [中文](README.zh.md)
