import { defineEventHandler, useBody, sendError, createError } from 'h3'
import fs from 'fs'

export interface SignUpBody {
  name: string
  password: string
}

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

  if (users.some(user => user.name === name)) sendError(event, createError({
    statusCode: 400,
    data: 'Username is already takes'
  }))
  else fs.writeFileSync('./.output/server/users.json', JSON.stringify([...users, { name, password }]))

  return true
})

