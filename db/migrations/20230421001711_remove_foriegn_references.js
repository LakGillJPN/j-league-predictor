/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('predications', (table) => {
    table.dropForeign('game_id');
  })
  .alterTable('points', (table) => {
    table.dropForeign('game_id');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('predications', (table) => {
    table.integer('game_id').references('id').inTable('fixtures').notNullable();
  })
  .alterTable('points', (table) => {
    table.integer('game_id').references('id').inTable('fixtures').notNullable();
  });
};