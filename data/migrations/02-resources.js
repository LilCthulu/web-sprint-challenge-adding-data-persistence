exports.up = function(knex) {
    return knex.schema.createTable("resources", function(resources) {
    resources.increments('resource_id')
    resources.text('resource_name')
    .notNullable()
    .unique()
    resources.text('resource_description')
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("resources");
};
