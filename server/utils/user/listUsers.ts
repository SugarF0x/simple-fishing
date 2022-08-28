import { isDevelopment } from 'std-env'
import { UserData } from '~/server/types'
import { connectMongo, disconnectMongo, getUsersCollection } from '~/server/db'
import { FindCursor } from 'mongodb'

export async function listUsers(): Promise<FindCursor<UserData>> {
  if (isDevelopment) return await listUsersDev()
  else return await listUsersProd()
}

async function listUsersDev() {
  const collection = getUsersCollection(await connectMongo())

  const users = await collection.find({})

  await disconnectMongo()
  return users
}

async function listUsersProd() {
  return new FindCursor()
}
