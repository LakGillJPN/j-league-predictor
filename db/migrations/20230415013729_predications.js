/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('predications', (table) => {
    table.increments("entries").primary();
    table.string('username');
    table.integer('game_id').references('id').inTable('fixtures');
    table.integer('home_predication').notNullable();
    table.integer('away_predication').notNullable();
    table.boolean('home_winner_predication').nullable();
    table.boolean('away_winner_predication').nullable();
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable("predications");
};
