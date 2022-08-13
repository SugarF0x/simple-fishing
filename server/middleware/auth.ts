import { useCookie, sendError, defineMiddleware, createError } from 'h3'

export default defineMiddleware((event) => {
  if (event.req.originalUrl.split('/').slice(-1)[0].includes('.')) return
  if (event.req.originalUrl.includes('user')) return

  const token = useCookie(event, 'token')
  if (!token) {
    sendError(event, createError({
      statusCode: 401,
      data: 'No authorization token found'
    }))
  } else {
    event.context.auth = { user: 'dev-user-from-middleware' }
  }
})
