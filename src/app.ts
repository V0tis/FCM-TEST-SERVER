import { GraphQLServer } from 'graphql-yoga'
import admin from 'firebase-admin'
import { PORT } from "./config"
import index from "./schema";

const serviceAccount = '../fcm-test-59224-firebase-adminsdk-sb18n-1c76e69187.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fcm-test-59224.firebaseio.com'
})

const app = new GraphQLServer({ schema: index })

app.start({ port: PORT }, () => console.log(`🚀🚀🚀 Server Listening on port ${PORT}`))
