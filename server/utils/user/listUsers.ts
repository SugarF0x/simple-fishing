import { isDevelopment } from 'std-env'
import { UserData } from '~/server/types'
import fs from 'fs'

export function listUsers(): UserData[] {
  if (isDevelopment) return listUsersDev()
  else return listUsersProd()
}

function listUsersDev() {
  let users: UserData[] = []

  try {
    users = JSON.parse(fs.readFileSync('./.output/server/users.json', 'utf-8'))
  } catch (e) {
    console.error('Failed to fetch users file, returning empty array')
    console.error(e)
    return []
  }

  return users
}

function listUsersProd() {
  return []
}
