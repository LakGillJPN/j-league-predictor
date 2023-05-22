import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('fixtures', (table) => {
    table.string('venue_name');
    table.string('venue_city');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('fixtures', (table) => {
    table.dropColumn('venue_name');
    table.dropColumn('venue_city');
  })
}

