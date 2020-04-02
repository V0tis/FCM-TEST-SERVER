import { GraphQLServer } from 'graphql-yoga'
import { PORT } from "./config"
import index from "./schema";

const app = new GraphQLServer({ schema: index })

app.start({ port: PORT }, () => console.log(`🚀🚀🚀 Server Listening on port ${PORT}`))
