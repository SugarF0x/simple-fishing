import { CompatibilityEvent, H3Error } from 'h3'
import 'h3'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      AUTH_TOKEN_KEY: string
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
