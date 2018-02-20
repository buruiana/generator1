exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema
      .createTable('component', table => {
        table.increments();
        table.string('name');
        table.string('description');
        table.integer('technology');
        table.string('provider');
        table.timestamps(false, true);
      })
      .createTable('prop', table => {
        table.increments();
        table
          .integer('component_id')
          .unsigned()
          .references('id')
          .inTable('component')
          .onDelete('CASCADE');
        table.string('name');
        table.string('description');
        table.string('type');
        table.timestamps(false, true);
      })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('prop'), knex.schema.dropTable('component')]);
};
