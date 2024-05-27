/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: string
  readonly VITE_STAGE: string
  readonly VITE_ROLLBAR_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
