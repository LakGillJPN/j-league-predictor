/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('points', (table) => {
    table.dropForeign(['game_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.table('points', (table) => {
    table.foreign('game_id').references('fixtures.id');
  });
};