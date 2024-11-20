import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000, // 포트 설정. 기본값은 5173
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
  build: {
    outDir: "build",
  },
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
