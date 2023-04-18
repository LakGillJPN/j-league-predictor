/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('points', (table) => {
    table.increments("entries").primary();
    table.string('username');
    table.integer('game_id').references('id').inTable('fixtures');
    table.string('gameweek');
    table.integer('game_points').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable("points");
};
