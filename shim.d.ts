declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      AUTH_TOKEN_KEY: string
    }
  }
}

export {}
