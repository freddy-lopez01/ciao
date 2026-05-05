import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ciao/",   // ← must match your repo name exactly
  plugins: [
    reactRouter(),
    tsconfigPaths(),
  ],
})
