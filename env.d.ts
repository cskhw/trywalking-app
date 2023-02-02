/// <reference path="auto-imports.d.ts" />
/// <reference path="components.d.ts" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    action?: string;
    subject?: string;
    layoutWrapperClasses?: string;
  }
}

// Env
interface ImportMetaEnv {
  VITE_MODE: string;
  VITE_CONTEXT_PATH: string;
  VITE_BASE_URL: string;
  VITE_LOG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  ss;
}
