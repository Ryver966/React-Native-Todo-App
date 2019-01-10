import client from '../apolloClient'
import { getUser } from '../query/user'

export const getUserByUsernameAndPassword = async ({ username, password }) => {
  try {
    const query = await client.query({
      query: getUser,
      variables: {
        username,
        password
      }
    })
    console.log(query)
  } catch (e) {
    console.log(e)
  }
}