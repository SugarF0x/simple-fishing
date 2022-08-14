import { useCookie, defineMiddleware } from 'h3'

export default defineMiddleware(async (event) => {
  const token = useCookie(event, 'token')
  if (token) event.context.auth = {
    ...event.context.auth,
    user: JSON.parse(token)
  }
})
