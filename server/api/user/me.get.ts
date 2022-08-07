import { defineEventHandler } from 'h3'

export interface UserGetResponse {
  user: string
}

export default defineEventHandler<UserGetResponse>((event) => {
  return {
    user: event.context.auth.user
  }
})
