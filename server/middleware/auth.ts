import { useCookie, sendRedirect, defineMiddleware } from 'h3'

export default defineMiddleware(async (event) => {
  const url = event.req.originalUrl

  if (url === '/') return
  if (url.includes('/user')) return
  if (url === '/manifest.json') return

  const token = useCookie(event, 'token')
  if (!token) {
    return await sendRedirect(event, '/user/login')
  } else {
    event.context.auth = { user: 'dev-user-from-middleware' }
  }
})
