const { db, tables } = require("../../db/knex")

const byId = id =>
  db(tables.TASKS)
    .where({ id })
    .first()
    .then(task => task)

const all = () => db.select().table(tables.TASKS);

const remove = id =>
  db(tables.TASKS)
    .where(({ id }))
    .del()
    .returning('id')
    .then(([id]) => id)
    .catch(e => e);

const create = ({ title, description, user_id }) =>
  db(tables.TASKS)
    .insert({ title, description, user_id })
    .returning('id')
    .then(([id]) => id)
    .catch(e => e) 

const queries = {
  task(_, { id }, ctx, info) {
    return byId(id)
  }
}

const mutations = {
  createTask(
    _,
    {
      input: { title, description, user_id }
    },
    ctx,
    info
  ) {
    return create({ title, description, user_id })
  },
  removeTask(_, { id }, ctx, info) {
    return remove(id);
  }
}

module.exports = {
  task: {
    mutations,
    queries,
    create,
    all,
    remove,
    byId
  }
}
