exports.up = function(knex) {
    return knex.schema.createTable('projects', function(projects) {
        projects.increments('project_id')

        projects.text('project_name')
            .notNullable()
        projects.text('project_description')
    })
}