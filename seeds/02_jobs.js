/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("jobs").del();
  await knex("jobs").insert([
    {
      id: 1,
      username: "mode123",
      job_title: "Software Engineer",
      company_name: "Google",
      location: "Mountain View, CA",
      applied: false,
      followup: "0",
      post_date: "2021-10-01",
    },
    {
      id: 2,
      username: "mode123",
      job_title: "Software Engineer",
      company_name: "Amazon",
      location: "Seattle, WA",
      applied: false,
      followup: "0",
      post_date: "2021-10-01",
    },
  ]);
};
