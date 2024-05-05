/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("jobs").del();
  await knex("jobs").insert([
    {
      id: 3862163296,
      username: "bsmith",
      job_title: "Junior Full Stack Web Developer - Punt.com",
      company_name: "Punt",
      location: "Vancouver, BC (On-site)",
      applied: false,
      followup: "0",
      post_date: "1 month ago",
    },
    {
      id: 3886011976,
      username: "bsmith",
      job_title: "Senior Full Stack Web Developer",
      company_name: "Amur Financial Group",
      location: "Surrey, BC (On-site)",
      applied: false,
      followup: "0",
      post_date: "1 month ago",
    },
    {
      id: 3908137462,
      username: "bsmith",
      job_title: "Front End Developer (React and Node.js)",
      company_name: "Workiy Inc.",
      location: "Burnaby, BC (Remote)",
      applied: false,
      followup: "0",
      post_date: "1 week ago",
    },
    {
      id: 3915931489,
      username: "bsmith",
      job_title:
        "Jr. Software Development Engineer - Vancouver, Jr. Developer Program",
      company_name: "Amazon",
      location: "Vancouver, BC",
      applied: true,
      followup: "0",
      post_date: "2 days ago",
    },
    {
      id: 3887765120,
      username: "mode123",
      job_title: "Frontend Developer",
      company_name: "Matrica Consulting",
      location: "Canada (Remote)",
      applied: false,
      followup: "3",
      post_date: "4 weeks ago",
    },
    {
      id: 3913429063,
      username: "mode123",
      job_title: "Intermediate to Senior Full-Stack Web Developer",
      company_name: "Alexi",
      location: "Canada (Remote)",
      applied: false,
      followup: "3",
      post_date: "2 days ago",
    },
  ]);
};
