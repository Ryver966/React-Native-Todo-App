import gql from 'graphql-tag'

export const getUser = gql`
  query getUserByUsernameAndPassword($username: String!, $password: String!) {
    getUserByUsernameAndPassword(username: $username, password: $password) {
      first_name
      last_name
    }
  }
`