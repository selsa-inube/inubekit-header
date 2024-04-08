import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-icons/md",
        "react/jsx-runtime",
        "styled-components",
        "@inubekit/foundations",
        "@inubekit/user",
        "@inubekit/hooks",
        "@inubekit/fullscreennav",
        "@inubekit/icon",
        "@inubekit/stack",
        "@inubekit/text",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
