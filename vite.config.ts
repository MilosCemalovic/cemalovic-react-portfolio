/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    coverage: {
      provider: "v8",
      thresholds: {
        lines: 60, // Start low, increase as coverage improves
        functions: 50,
        branches: 40,
        statements: 60,
      },
    },
  },
})
