import { useCookie, sendRedirect, defineMiddleware } from 'h3'

export default defineMiddleware(async (event) => {
  if (event.req.originalUrl.split('/').slice(-1)[0].includes('.')) return
  if (event.req.originalUrl.includes('user')) return

  const token = useCookie(event, 'token')
  if (!token) {
    return await sendRedirect(event, '/user/login')
  } else {
    event.context.auth = { user: 'dev-user-from-middleware' }
  }
})
