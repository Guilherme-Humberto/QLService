import { gql } from 'apollo-server'

export const typeDefs = gql`
    type User {
        id: String,
        name: String!,
        surname: String!,
        age: Int!
    }
    type Query {
        user(id: String!): User!
        users: [User]
    }

    input UserInput {
        id: String,
        name: String,
        surname: String,
        age: Int
    }
    
    type Mutation {
        register(userInput: UserInput): User
        update(id: String!, userInput: UserInput!): User
        delete(id: String!): Boolean
    }
`