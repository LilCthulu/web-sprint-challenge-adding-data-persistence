exports.up = function(knex) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments('project_id')

        projects.text('project_name')
            .notNullable()
        projects.text('project_description', 128)
        projects.boolean('project_completed').defaultTo(false)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects");
};
