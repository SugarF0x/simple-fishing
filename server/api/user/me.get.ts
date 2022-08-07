import { defineEventHandler } from 'h3'

export interface UserGetResponse {
  user: string
}

export default defineEventHandler<UserGetResponse>(() => {
  return {
    user: 'dev-user'
  }
})
