import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/ciao/" : "/",
  plugins: [
	tailwindcss(),
    reactRouter(),
  ],
}));
