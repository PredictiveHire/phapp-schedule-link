/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc"
import fs from "fs"
import path from "path"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react(), tsconfigPaths()],
  server:
    process.env.NODE_ENV === "development"
      ? {
          open: true,
          host: "schedulelink.local.sapia.ai",
          port: 2443,
          strictPort: true,
          https: {
            key: fs.readFileSync(path.resolve(__dirname, "./dev-certs/schedulelink.local.sapia.ai.key")),
            cert: fs.readFileSync(path.resolve(__dirname, "./dev-certs/schedulelink.local.sapia.ai.crt")),
          },
          proxy: {
            "^/api/ap-southeast-2/.*": {
              target: "http://localhost:8342/api/ap-southeast-2", // or whichever port it's listening on
              changeOrigin: true,
              secure: false,
              rewrite: (path) => path.replace(/^\/api\/ap-southeast-2/, ""),
            },
          },
        }
      : {},
})
