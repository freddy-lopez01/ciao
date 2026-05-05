import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/your-repo-name/",   // ← must match your GitHub repo name exactly
  plugins: [
    reactRouter({
      ssr: false,             // ← disables SSR, outputs pure static files
    }),
  ],
});
