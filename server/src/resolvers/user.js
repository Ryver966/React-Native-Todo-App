const { db, tables } = require("../../db/knex")

const byId = id =>
  db(tables.USERS)
    .where({ id })
    .first()
    .then(user => user)

const create = ({ username, password, email, first_name, last_name }) =>
  db(tables.USERS)
    .insert({ username, password, email, first_name, last_name })
    .returning('id')
    .then(([id]) => id)
    .catch(e => e)

const queries = {
  user(_, { id }, ctx, info) {
    return byId(id)
  }
}

module.exports = {
  user: {
    queries,
    create,
    byId
  }
}
