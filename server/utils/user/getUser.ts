import { isDevelopment } from 'std-env'
import { UserData } from '~/server/types'
import { listUsers } from '~/server/utils'

export function getUser(login: string) {
  if (isDevelopment) return getUserDev(login)
  return getUserProd(login)
}

function getUserDev(login: string): UserData | null {
  let users = listUsers()

  const user = users.find(entry => entry.login === login)
  if (!user) return null

  return user
}

function getUserProd(login: string): UserData | null {
  return null
}
