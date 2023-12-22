/// <reference types="vite/client" />

interface ImportMetaEnv {
  // readonly DB_PASSWORD: string
  readonly VITE_NEWS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}