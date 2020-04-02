import { GraphQLServer } from 'graphql-yoga'
import { PORT } from "./config"

const app = new GraphQLServer({})

app.start({ port: PORT }, () => console.log(`🚀🚀🚀 Server Listening on port ${PORT}`))
