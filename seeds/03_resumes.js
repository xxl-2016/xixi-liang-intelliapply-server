/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("resume").del();
  await knex("resume").insert([
    {
      id: 1,
      username: "mode123",
      first_name: "John",
      last_name: "Doe",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      portfolio: "",
      skills: "",
      experience: [
        {
          title: "Software Engineer",
          company: "ABC Inc.",
          start_date: "2020-01-01",
          end_date: "2021-12-31",
        },
        {
          title: "Web Developer",
          company: "XYZ Corp.",
          start_date: "2018-06-01",
          end_date: "2019-12-31",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          university: "University XYZ",
          graduation_year: "2020",
        },
        {
          degree: "Master of Business Administration",
          university: "University ABC",
          graduation_year: "2018",
        },
      ],
      certifications: [
        {
          name: "AWS Certified Solutions Architect - Associate",
          issued_by: "Amazon Web Services",
          year: "2021",
        },
        {
          name: "Microsoft Certified: Azure Administrator Associate",
          issued_by: "Microsoft",
          year: "2020",
        },
      ],
    },
  ]);
};
