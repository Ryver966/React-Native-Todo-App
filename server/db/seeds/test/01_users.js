const AES = require("crypto-js/aes")

exports.seed = (kenx, _) =>
  kenx('users')
    .del() // Deletes ALL existing entries
    // Insert user seeds
    .then(() =>
      kenx('users').insert([
        {
          id: 1,
          username: 'test.user1',
          first_name: 'Test',
          last_name: 'User1',
          email: 'test.user1@domain.com',
          password: AES.encrypt('Message', 'testtest').toString()
        },
        {
          id: 2,
          username: 'test.user2',
          first_name: 'Test',
          last_name: 'User2',
          email: 'test.user2@gmail.com',
          password: AES.encrypt('Message', 'testtest').toString()
        }
      ])
    )