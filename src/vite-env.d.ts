/// <reference types="vite/client" />

/**
 * The build-time settings the client bundle reads.
 *
 * `VITE_` is not an oversight: these are compiled into the bundle and readable by anyone who opens
 * the site. A URL is fine there. Nothing secret belongs in one, because there is no such thing as a
 * secret in a client bundle.
 */
interface ImportMetaEnv {
  /** Where the studio panel is served, without a trailing slash. */
  readonly VITE_PANEL_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
