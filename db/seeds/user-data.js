/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'Joelinton', email: 'BigJoe@gmail.com', password: '1234' },
    {id: 2, username: 'Diesel', email: 'DiesalPower@hotmail.com', password:  '4567' }
  ]);
};
