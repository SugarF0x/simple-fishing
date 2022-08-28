import { isDevelopment } from 'std-env'
import { UserData } from '~/server/types'
import { connectMongo, disconnectMongo, getUsersCollection } from '~/server/db'

export async function addUser(data: UserData) {
  if (isDevelopment) return await addUserDev(data)
  else return await addUserProd(data)
}

async function addUserDev(data: UserData) {
  const collection = getUsersCollection(await connectMongo())

  await collection.insertOne(data)

  await disconnectMongo()
  return
}

async function addUserProd(data: UserData) {
  return
}
