import { isDevelopment } from 'std-env'
import { UserData } from '~/server/types'
import { connectMongo, disconnectMongo, getUsersCollection } from '~/server/db'

export async function getUser(login: string) {
  if (isDevelopment) return await getUserDev(login)
  return await getUserProd(login)
}

async function getUserDev(login: string): Promise<UserData | null> {
  const collection = getUsersCollection(await connectMongo())

  const user = await collection.findOne({ login })

  await disconnectMongo()
  return user
}

async function getUserProd(login: string): Promise<UserData | null> {
  return null
}
