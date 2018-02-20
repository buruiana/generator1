exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('provider', table => {
      table.increments();
      table.string('name');
      table.string('path');
      table.timestamps(false, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('provider')]);
};
