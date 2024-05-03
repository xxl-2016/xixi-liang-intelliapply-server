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
    {
      id: 3,
      username: "jdoe",
      email: "jdoe@gmail.com",
      password: "123456",
    },
    {
      id: 4,
      username: "jane_doe",
      email: "janedoe@gmail.com",
      password: "123456",
    },
    {
      id: 5,
      username: "jsmith",
      email: "jsmith@gmail.com",
      password: "123456",
    },
    {
      id: 6,
      username: "mary_smith",
      email: "mary.smith@gmail.com",
      password: "123456",
    },
    {
      id: 7,
      username: "alexander_king",
      email: "alexander.king@gmail.com",
      password: "123456",
    },
    {
      id: 8,
      username: "emily_smith",
      email: "emily.smith@gmail.com",
      password: "123456",
    },
  ]);
};
