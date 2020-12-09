import 'dotenv/config'
import './database/index'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './graphql/schemas/UserSchema'
import resolvers from './graphql/resolvers/index'

const server = new ApolloServer({ typeDefs, resolvers })
export { server }