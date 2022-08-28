import { defineEventHandler, useBody, sendError, createError, setCookie } from 'h3'
import { addUser, getUser } from '~/server/utils'
import { UserData } from '~/server/types'

export default defineEventHandler(async (event) => {
  const body = await useBody<UserData>(event)
  const { login, password } = body ?? {}

  if (!login || !password) sendError(event, createError({
    statusCode: 400,
    data: 'name or password missing from body'
  }))

  const foundUser = await getUser(login)

  if (foundUser) sendError(event, createError({
    statusCode: 400,
    data: 'Username is already takes'
  }))
  else await addUser(body)

  setCookie(event, 'token', JSON.stringify(body))

  return true
})

