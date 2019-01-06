const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")
const { user } = require("./src/resolvers/user")

const typesDefinition = gql`
  type User {
    id: ID!
    username: String!
    first_name: String
    last_name: String
    email: String!
    password: String!
  }

  type Query {
    user(id: ID!): User!
  }

  input createUser {
    username: String!
    first_name: String
    last_name: String
    email: String!
    password: String!
  }

  type Mutation {
    createUser(input: createUserInput): String
  }
`

const resolvers = {
  Query: {
    ...user.queries
  }
}
const server = new ApolloServer({ typesDefinition, resolvers })
const app = express()
const port = 3000

app.listen({ port }, () =>
  console.log(`Server is ready at http:/localhost:${port}${server.graphqlPath}`)
)
