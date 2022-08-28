import { isDevelopment } from 'std-env'
import { UserData } from '~/server/types'
import { listUsers } from '~/server/utils'
import fs from 'fs'

export function addUser(data: UserData): void {
  if (isDevelopment) return addUserDev(data)
  else return addUserProd(data)
}

function addUserDev(data: UserData) {
  const users = listUsers()

  try {
    fs.writeFileSync('./.output/server/users.json', JSON.stringify([...users, data], null, 2))
  } catch (e) {
    console.error('Failed writing users file')
  }

  return
}

function addUserProd(data: UserData) {
  return
}
