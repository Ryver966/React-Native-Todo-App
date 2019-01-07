const { user } = require("../user")
const AES = require("crypto-js/aes")

let createUserId

describe('User', async () => {
  it('successfully gets user by id', async () => {
    const { id, username, password, email} = await user.byId(1)

    expect(id).toEqual(1)
    expect(username).toBeDefined()
    expect(password).toBeDefined()
    expect(email).toBeDefined()
  })

  it('returns undefined if the user does not exist', async () => {
    const res = await user.byId(999999)

    expect(res).toBeUndefined()
  })

  it('successfully creates new user if provided with needed data and returns new id', async () => {
    const randomString = Math.random()
      .toString(24)
      .substring(7)
    const password = AES.encrypt('Message', randomString).toString()
    const email = `${randomString}@domain.com`

    createUserId = await user.create({
      username: randomString,
      first_name: randomString,
      last_name: randomString,
      email,
      password
    })

    expect(createUserId).toBeDefined()
    expect(createUserId).toBeGreaterThan(0)
  })

  it('does not work if trying to create user with incorrect data', async () => {
    const { name } = await user.create({ username: 'asd', email: null, password: 'asdzxc' })

    expect(name).toEqual("error")
  })
})