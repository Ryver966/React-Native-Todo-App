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

const mutations = {
  createUser(
    _,
    {
      input: { username, password, email, first_name, last_name }
    },
    ctx,
    info
  ) {
    return create({ username, password, email, first_name, last_name })
  }
}

module.exports = {
  user: {
    mutations,
    queries,
    create,
    byId
  }
}
