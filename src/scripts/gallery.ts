/**
 * Gallery interactivity: lightbox, scroll reveal, header state,
 * scroll progress bar and hero parallax.
 * Vanilla TypeScript — no dependencies.
 */
import { sitios, type Sitio } from "../data/sitios";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------- Header scrolled state ---------- */
function initHeader(): void {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) return;

  const onScroll = (): void => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Scroll reveal ---------- */
function initReveal(): void {
  const items = document.querySelectorAll<HTMLElement>(".reveal");

  if (prefersReducedMotion.matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------- Scroll progress bar ---------- */
function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>(".scroll-progress");
  if (!bar) return;

  let ticking = false;

  const update = (): void => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleX(${progress.toFixed(4)})`;
  };

  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

/* ---------- Hero background parallax ---------- */
/* Translates the hero backdrop a fraction of scrollY for depth. Disabled
   under reduced motion. rAF-throttled; transform/opacity only. */
function initParallax(): void {
  if (prefersReducedMotion.matches) return;

  const hero = document.querySelector<HTMLElement>(".hero");
  const heroBg = document.querySelector<HTMLElement>(".hero-bg");
  if (!hero || !heroBg) return;

  let ticking = false;

  const update = (): void => {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const offset = Math.min(window.scrollY * 0.12, 220);
    heroBg.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
  };

  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Lightbox ---------- */
interface LightboxElements {
  dialog: HTMLDialogElement;
  img: HTMLImageElement;
  title: HTMLElement;
  desc: HTMLElement;
  count: HTMLElement;
}

function initLightbox(): void {
  const dialog = document.getElementById("lightbox") as HTMLDialogElement | null;
  if (!dialog) return;

  const els: LightboxElements = {
    dialog,
    img: document.getElementById("lightbox-img") as HTMLImageElement,
    title: document.getElementById("lightbox-title") as HTMLElement,
    desc: document.getElementById("lightbox-desc") as HTMLElement,
    count: document.getElementById("lightbox-count") as HTMLElement,
  };

  const tiles = Array.from(document.querySelectorAll<HTMLElement>("[data-index]"));
  let current = 0;
  let lastTrigger: HTMLElement | null = null;
  let closeTimer = 0;

  function render(): void {
    const sitio: Sitio = sitios[current];
    els.img.src = sitio.image;
    els.img.alt = `Fotografía de ${sitio.title}`;
    els.img.width = sitio.width;
    els.img.height = sitio.height;
    els.title.textContent = sitio.title;
    els.desc.textContent = sitio.description;
    els.count.textContent = `${String(current + 1).padStart(2, "0")} / ${String(sitios.length).padStart(2, "0")}`;
  }

  function openAt(index: number, trigger?: HTMLElement | null): void {
    // Cancel any in-flight close animation and its timer.
    window.clearTimeout(closeTimer);
    dialog.classList.remove("closing");

    current = (index + sitios.length) % sitios.length;
    lastTrigger = trigger ?? lastTrigger;
    render();
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("is-locked");
  }

  function close(): void {
    if (!dialog.open) return;
    const animate = !prefersReducedMotion.matches;
    dialog.classList.add("closing");
    closeTimer = window.setTimeout(
      () => {
        dialog.classList.remove("closing");
        dialog.close();
      },
      animate ? 220 : 0,
    );
  }

  tiles.forEach((tile, i) => {
    tile.addEventListener("click", () => openAt(i, tile));
  });

  dialog.querySelector("[data-action='close']")?.addEventListener("click", close);
  dialog.querySelector("[data-action='prev']")?.addEventListener("click", () => openAt(current - 1));
  dialog.querySelector("[data-action='next']")?.addEventListener("click", () => openAt(current + 1));

  // Esc is handled natively by <dialog>; arrows navigate between items.
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      openAt(current - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      openAt(current + 1);
    }
  });

  // Clicking the backdrop closes the lightbox.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  // Release scroll lock and return focus when the dialog closes for any reason.
  dialog.addEventListener("close", () => {
    document.body.classList.remove("is-locked");
    lastTrigger?.focus();
  });
  dialog.addEventListener("cancel", () => document.body.classList.remove("is-locked"));
}

initHeader();
initReveal();
initScrollProgress();
initParallax();
initLightbox();
