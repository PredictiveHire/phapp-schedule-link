/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: string
  readonly VITE_STAGE: string
  readonly VITE_ROLLBAR_TOKEN: string
  readonly VITE_LI_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
