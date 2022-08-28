import { defineEventHandler, useBody, sendError, createError, setCookie } from 'h3'
import { getUser } from '~/server/utils'
import { UserData } from '~/server/types'

export default defineEventHandler(async (event) => {
  const body = await useBody<UserData>(event)
  const { login, password } = body ?? {}

  if (!login || !password) sendError(event, createError({
    statusCode: 400,
    data: 'name or password missing from body'
  }))

  const foundUser = getUser(login)

  if (!foundUser) sendError(event, createError({
    statusCode: 404,
    data: 'no user found'
  }))

  if (foundUser.password !== password) sendError(event, createError({
    statusCode: 400,
    data: 'incorrect password'
  }))

  setCookie(event, 'token', JSON.stringify(foundUser))

  return true
})

