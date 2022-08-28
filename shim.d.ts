import { CompatibilityEvent, H3Error } from 'h3'
import 'h3'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      NUXT_MONGO_URL: string
      NUXT_MONGO_NAME: string
    }
  }
}

declare module 'h3' {
  export interface CompatibilityEvent {
    context: {
      auth?: {
        user: string
        password: string
      }
    }
  }

  export function sendError(event: CompatibilityEvent, error: Error | H3Error, debug?: boolean): never
}

export {}
