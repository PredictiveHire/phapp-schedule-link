/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import fs from "fs"
import path from "path"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    host: "schedule.local.sapia.ai",
    port: 2443,
    strictPort: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./dev-certs/schedule.local.sapia.ai.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "./dev-certs/schedule.local.sapia.ai.crt")),
    },
    proxy: {
      "^/api/ap-southeast-2/.*": {
        target: "http://localhost:8342/api/ap-southeast-2", // or whichever port it's listening on
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/ap-southeast-2/, ""),
      },
    },
  },
  define: {
    "process.env": {},
  },
  // Config for vitest
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globalSetup: "./vitest.global-setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: false,
    coverage: {
      provider: "istanbul",
      exclude: [
        "node_modules/",
        "src/setupTests.ts",
        "src/__generated__",
        "src/config/",
        "**/mockData.ts",
        "src/**/mockData/*",
      ],
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ["text", "json-summary", "json"],
    },
  },
})
