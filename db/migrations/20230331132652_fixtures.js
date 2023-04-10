/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable('fixtures', (table) => {
    table.integer('id').primary()
    table.string('gameweek').notNullable();
    table.string('home_team', 64).notNullable();
    table.string('away_team', 64).notNullable();
    table.dateTime('date');
    table.string('isFinished');
    table.string('home_team_logo',256).notNullable();
    table.string('away_team_logo',256).notNullable();
    table.boolean('home_winner').nullable();
    table.boolean('away_winner').nullable();
    table.integer('home_score').nullable();
    table.integer('away_score').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
