/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("resumes").del();
  await knex("resumes").insert([
    {
      id: 1,
      username: "bsmith",
      first_name: "Betty",
      last_name: "Smith",
      address: "123 Main St",
      email: "bsmith@gmail.com",
      phone: "778-888-9090",
      location: "Vancouver BC",
      linkedin: "https://www.linkedin.com/in/bsmith",
      github: "https://github.com/bsmith",
      portfolio: "https://bsmith.dev",
      skills:
        "Python, Java, C++, C, SQL, Data Analysis, HTML, CSS, Sass, JavaScript, REST APIs, React JS, Node.js, MySQL",
      experience: JSON.stringify([
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
      ]),
      education: JSON.stringify([
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
      ]),
      certifications: JSON.stringify([
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
      ]),
    },
  ]);
};
