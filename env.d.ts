/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 自定义内容...
  readonly VITE_APP_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}