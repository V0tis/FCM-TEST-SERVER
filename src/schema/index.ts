import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'
import { join } from 'path'

const allTypes: GraphQLSchema[] = fileLoader(
    join(__dirname, '../api/**/*.graphql')
)

const allResolvers = fileLoader(
    join(__dirname, '../api/**/*.resolvers.*')
)

const mergedTypes = mergeTypes(allTypes)
const mergedResolvers = mergeResolvers(allResolvers)

const index = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
})

export default index

