exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(tasks) {
        tasks.increments('task_id')

        tasks.text('task_description', 128)
            .notNullable()
        tasks.text('task_notes')
        tasks.boolean('task_completed').defaultTo(false)
        tasks.integer('project_id')
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks");
};
