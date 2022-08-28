import { Db, MongoClient } from 'mongodb'
import { UserData } from '~/server/types'

const config = useRuntimeConfig()
export const mongoClient = new MongoClient(config.mongoUrl)

export async function connectMongo() {
  await mongoClient.connect()
  return mongoClient.db(config.mongoName)
}

export async function disconnectMongo() {
  await mongoClient.close()
}

export function getUsersCollection(db: Db) {
  return db.collection<UserData>(MongoCollections.USERS)
}

export enum MongoCollections {
  USERS = 'users'
}
