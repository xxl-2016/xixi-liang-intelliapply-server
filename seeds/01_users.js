/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      username: "mode123",
      email: "mdoe@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      username: "bsmith",
      email: "bsmith@gmail.com",
      password: "123456",
    },
  ]);
};
