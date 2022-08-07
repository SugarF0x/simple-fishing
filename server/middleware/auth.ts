import { useCookie, sendRedirect, defineMiddleware } from 'h3'

export default defineMiddleware(async (event) => {
  if (event.req.originalUrl === '/login') return

  const token = useCookie(event, 'token')
  if (!token) {
    return await sendRedirect(event, '/login')
  } else {
    event.context.auth = { user: 'dev-user-from-middleware' }
  }
})
