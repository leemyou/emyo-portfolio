import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@apis", replacement: "/src/apis" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@containers", replacement: "/src/containers" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@store", replacement: "/src/store" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
