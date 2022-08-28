import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "./",
  server: {
    open: true,
    port: 54321,
  },
  build: {
    chunkSizeWarningLimit: 1024,
  },
})
