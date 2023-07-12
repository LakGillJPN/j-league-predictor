import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex: Knex) {
  return knex.schema.createTable('users', function(table)  {
   table.increments('id').primary();
   table.string('username').unique().notNullable();
   table.string('email').unique().notNullable();
   table.string('password').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex: Knex) {
  knex.schema.dropTable("users");
};
