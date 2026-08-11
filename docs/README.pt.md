# Praias da Venezuela — Galeria

Galeria fotográfica de locais turísticos da Venezuela, migrada para um site estático moderno com **Astro**.

Originalmente um projeto PHP + Bootstrap 3 (2017, Cátedra Bolivariana), reconstruído em 2026 com uma estética cinematográfica escura: galeria assimétrica, lightbox nativo com suporte a teclado, animações suaves de scroll e zero frameworks além do Astro.

## Stack

- **Astro 5** (estático, sem integrações)
- CSS moderno escrito à mão (custom properties, grid, `aspect-ratio`, `backdrop-filter`)
- TypeScript vanilla para o lightbox e as animações
- `<dialog>` nativo para o lightbox (anterior/próximo, Esc, setas, bloqueio de scroll)

## Conteúdo

7 locais venezuelanos com título, imagem e resenha em espanhol, definidos em `src/data/sitios.ts` — uma única fonte de verdade para todo o site.

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # servidor de desenvolvimento (http://localhost:4321)
npm run build   # build estático em dist/
npm run preview # pré-visualizar o build
```

## Estrutura

```
src/
  data/sitios.ts        # conteúdo da galeria (editar aqui)
  layouts/BaseLayout.astro
  pages/index.astro     # hero + galeria + lightbox + footer
  scripts/gallery.ts    # lightbox, scroll reveal, estado do header
  styles/global.css     # tema completo
public/
  img/                  # imagens da galeria
```

## Créditos

Armando José Rojas Querales — 2017 · 2026

---

**Outros idiomas:** [English](../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [中文](README.zh.md)
