const AES = require("crypto-js/aes")

exports.seed = (kenx, _) =>
  kenx('users')
    .del() // Deletes ALL existing entries
    // Insert user seeds
    .then(() =>
      kenx('users').insert([
        {
          id: 1,
          username: 'john.doe',
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@domain.com',
          password: AES.encrypt('Message', 'testtest').toString()
        },
        {
          id: 2,
          username: 'piotr.gorski',
          first_name: 'Piotr',
          last_name: 'Gorski',
          email: 'pgorski837@gmail.com',
          password: AES.encrypt('Message', 'testtest').toString()
        }
      ])
    )