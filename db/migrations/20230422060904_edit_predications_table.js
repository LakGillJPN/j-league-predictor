exports.up = function(knex) {
  return knex.schema.alterTable('predications', (table) => {
    table.string('current_gameweek').nullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('predications', (table) => {
    table.string('current_gameweek').notNullable().alter();
  });
};