const { db, tables } = require('../../db/knex')
const { task } = require('./task')

const byId = id =>
  db(tables.USERS)
    .where({ id })
    .first()
    .then(user => user)

const byUsernameAndPassowrd = ({ username, password }) =>
  db(tables.USERS)
    .where(function() {
      this.where({ username }).andWhere({ password })
    })
    .then(user => user)
    .catch(e => e)

const create = ({ username, password, email, first_name, last_name }) =>
  db(tables.USERS)
    .insert({ username, password, email, first_name, last_name })
    .returning('id')
    .then(([id]) => id)
    .catch(e => e)

const queries = {
  user(_, { id }, ctx, info) {
    return byId(id)
  },
  getUserByUsernameAndPassword(_, { username, password }, ctx, info) {
    return byUsernameAndPassowrd({ username, password })
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
    byUsernameAndPassowrd,
    queries,
    create,
    byId
  }
}
