/// <reference types="vite/client" />

// Env
interface ImportMetaEnv {
  VITE_MODE: string;
  VITE_CONTEXT_PATH: string;
  VITE_BASE_URL: string;
  VITE_LOG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
