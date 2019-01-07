exports.up = (knex, _) => 
  knex.schema.createTable('tasks', table => {
    table.increments().primary()
    table.timestamps(true, true)
    table
      .string('title')
      .notNullable()
    table
      .string('description', 1000)
    table
      .boolean('complete')
      .notNullable()
      .defaultTo(false)

    //relationships
    table
      .integer('user_id')
      .notNullable()
      .references('users.id')
  })

exports.down = (knex, _) => knex.schema.dropTable('tasks')
