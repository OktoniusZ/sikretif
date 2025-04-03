import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Disable hash suffixes for images
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            return "assets/[name].[ext]";
          }
          return "assets/[name].[hash].[ext]";
        },
      },
    },
  },
});
