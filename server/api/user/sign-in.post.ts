import { defineEventHandler, useBody, sendError, createError, setCookie } from 'h3'
import { SignUpBody } from '~/server/api/user/sign-up.post'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  const body = await useBody<SignUpBody>(event)
  const { name, password } = body ?? {}

  if (!name || !password) sendError(event, createError({
    statusCode: 400,
    data: 'name or password missing from body'
  }))

  let users: SignUpBody[] = []
  try {
    users = JSON.parse(fs.readFileSync('./.output/server/users.json', 'utf-8'))
  } catch (e) {}

  const matchedUser = users.find(user => user.name === name)
  if (!matchedUser) sendError(event, createError({
    statusCode: 404,
    data: 'no user found'
  }))

  if (matchedUser.password !== password) sendError(event, createError({
    statusCode: 400,
    data: 'incorrect password'
  }))

  setCookie(event, 'token', JSON.stringify(matchedUser))

  return true
})

