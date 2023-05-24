import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    // proxy: {
    //   "/api": {
    //     target: "https://moussemyanmar.com/api",
    //     changeOrigin: true,
    //   },
    // },

    proxy: {
      "/api": {
        target: "https://app.moussemyanmar.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "api"),
      },
      "/secure-api": {
        target: "https://app.knowthreats.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/secure-api/, "api"),
      },
    },
  },
});
