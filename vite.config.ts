import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
  base: "/",
=======
  base: "/portfolio/",
>>>>>>> 3026c8bb2c7a2d0eb3be5bdf2a1b126c6832e074
});
