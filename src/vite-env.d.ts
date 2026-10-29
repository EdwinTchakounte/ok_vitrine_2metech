/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** EnMKit web dashboard sign-in URL. Empty = platform entries hidden. */
  readonly VITE_DASHBOARD_URL?: string;
  /** EnMKit public API base URL. Optional. */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
