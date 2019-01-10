const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { user } = require('./src/resolvers/user')
const { task } = require('./src/resolvers/task')

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    first_name: String
    last_name: String
    email: String!
    password: String!
    tasks: [Task]
  }

  type Task {
    id: ID!
    title: String!
    user_id: ID!
    author: User!
    completed: Boolean!
    description: String
  }

  type Query {
    getUserByUsernameAndPassword(username: String!, password: String!): User!
    user(id: ID!): User!
    task(id: ID!): Task!
  }

  input createUserInput {
    username: String!
    first_name: String
    last_name: String
    email: String!
    password: String!
  }

  input createTaskInput {
    title: String!
    description: String
    user_id: ID!
  }

  type Mutation {
    createUser(input: createUserInput): String
    createTask(input: createTaskInput): String
  }
`

const resolvers = {
  Query: {
    ...user.queries,
    ...task.queries
  },
  User: {
    tasks({ user_id }) {
      return task.allForUser(user_id)
    }
  },
  Task: {
    author({ user_id }) {
      return user.byId(user_id)
    }
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
const port = 3000

app.listen({ port }, () =>
  console.log(`Server is ready at http://localhost:${port}${server.graphqlPath}`)
)
