// @ts-check
import { defineConfig } from "astro/config";

// Static site build. No integrations needed: semantic HTML, hand-crafted
// CSS and a small vanilla TypeScript bundle are enough for this gallery.
export default defineConfig({
  output: "static",
  build: {
    assets: "assets",
  },
});
