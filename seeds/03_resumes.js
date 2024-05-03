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
    {
      id: 2,
      username: "jdoe",
      first_name: "John",
      last_name: "Doe",
      address: "456 Elm St",
      email: "jdoe@gmail.com",
      phone: "123-456-7890",
      location: "New York City",
      linkedin: "https://www.linkedin.com/in/jdoe",
      github: "https://github.com/jdoe",
      portfolio: "https://jdoe.dev",
      skills: "JavaScript, React, Node.js, MongoDB, HTML, CSS, Express.js",
      experience: JSON.stringify([
        {
          title: "Full Stack Developer",
          company: "Tech Solutions LLC",
          start_date: "2019-01-01",
          end_date: "2021-12-31",
        },
      ]),
      education: JSON.stringify([
        {
          degree: "Bachelor of Arts in Computer Science",
          university: "University XYZ",
          graduation_year: "2018",
        },
      ]),
      certifications: JSON.stringify([
        {
          name: "AWS Certified Cloud Practitioner",
          issued_by: "Amazon Web Services",
          year: "2019",
        },
      ]),
    },
    {
      id: 3,
      username: "jane_doe",
      first_name: "Jane",
      last_name: "Doe",
      address: "789 Oak St",
      email: "janedoe@gmail.com",
      phone: "987-654-3210",
      location: "Los Angeles, CA",
      linkedin: "https://www.linkedin.com/in/jane_doe",
      github: "https://github.com/jane_doe",
      portfolio: "https://janedoe.dev",
      skills:
        "JavaScript, Python, HTML, CSS, React, Vue.js, Express.js, MongoDB",
      experience: JSON.stringify([
        {
          title: "Frontend Developer",
          company: "Web Solutions Inc.",
          start_date: "2018-01-01",
          end_date: "2020-12-31",
        },
        {
          title: "UI/UX Designer",
          company: "Design Studio XYZ",
          start_date: "2016-06-01",
          end_date: "2017-12-31",
        },
      ]),
      education: JSON.stringify([
        {
          degree: "Bachelor of Fine Arts in Design",
          university: "University ABC",
          graduation_year: "2016",
        },
      ]),
      certifications: JSON.stringify([
        {
          name: "Google Certified Professional - Web Developer",
          issued_by: "Google",
          year: "2017",
        },
      ]),
    },
    {
      id: 4,
      username: "jsmith",
      first_name: "John",
      last_name: "Smith",
      address: "567 Pine St",
      email: "jsmith@gmail.com",
      phone: "555-123-4567",
      location: "Chicago, IL",
      linkedin: "https://www.linkedin.com/in/jsmith",
      github: "https://github.com/jsmith",
      portfolio: "https://jsmith.dev",
      skills:
        "Java, C++, C#, SQL, Spring Framework, Hibernate, HTML, CSS, JavaScript",
      experience: JSON.stringify([
        {
          title: "Software Developer",
          company: "Tech Solutions Inc.",
          start_date: "2019-03-01",
          end_date: "2021-06-30",
        },
        {
          title: "Systems Analyst",
          company: "Data Systems LLC",
          start_date: "2017-06-01",
          end_date: "2019-02-28",
        },
      ]),
      education: JSON.stringify([
        {
          degree: "Bachelor of Science in Computer Engineering",
          university: "University XYZ",
          graduation_year: "2017",
        },
      ]),
      certifications: JSON.stringify([
        {
          name: "Oracle Certified Professional, Java SE Programmer",
          issued_by: "Oracle",
          year: "2018",
        },
      ]),
    },
    {
      id: 5,
      username: "mary_smith",
      first_name: "Mary",
      last_name: "Smith",
      address: "987 Maple Ave",
      email: "mary.smith@gmail.com",
      phone: "444-987-6543",
      location: "Miami, FL",
      linkedin: "https://www.linkedin.com/in/mary_smith",
      github: "https://github.com/mary_smith",
      portfolio: "https://marysmith.dev",
      skills:
        "Ruby, Ruby on Rails, Python, Django, PostgreSQL, HTML, CSS, JavaScript",
      experience: JSON.stringify([
        {
          title: "Full Stack Developer",
          company: "Web Development Solutions",
          start_date: "2018-01-01",
          end_date: "2020-12-31",
        },
        {
          title: "Software Engineer",
          company: "Tech Innovations LLC",
          start_date: "2016-06-01",
          end_date: "2017-12-31",
        },
      ]),
      education: JSON.stringify([
        {
          degree: "Bachelor of Science in Computer Engineering",
          university: "University ABC",
          graduation_year: "2016",
        },
      ]),
      certifications: JSON.stringify([
        {
          name: "Certified Ruby Programmer (CRP)",
          issued_by: "Ruby Association",
          year: "2017",
        },
      ]),
    },
    {
      id: 6,
      username: "alexander_king",
      first_name: "Alexander",
      last_name: "King",
      address: "246 Broadway",
      email: "alexander.king@gmail.com",
      phone: "222-333-4444",
      location: "Seattle, WA",
      linkedin: "https://www.linkedin.com/in/alexander_king",
      github: "https://github.com/alexander_king",
      portfolio: "https://alexanderking.dev",
      skills:
        "JavaScript, TypeScript, React, Redux, Node.js, Express.js, MongoDB",
      experience: JSON.stringify([
        {
          title: "Frontend Developer",
          company: "WebTech Solutions",
          start_date: "2019-01-01",
          end_date: "2021-12-31",
        },
        {
          title: "Software Engineer",
          company: "Tech Innovations Inc.",
          start_date: "2017-06-01",
          end_date: "2018-12-31",
        },
      ]),
      education: JSON.stringify([
        {
          degree: "Bachelor of Science in Computer Science",
          university: "University XYZ",
          graduation_year: "2017",
        },
      ]),
      certifications: JSON.stringify([
        {
          name: "Certified JavaScript Developer",
          issued_by: "JavaScript Institute",
          year: "2018",
        },
      ]),
    },
    {
      id: 7,
      username: "emily_smith",
      first_name: "Emily",
      last_name: "Smith",
      address: "135 Cedar St",
      email: "emily.smith@gmail.com",
      phone: "111-222-3333",
      location: "San Francisco, CA",
      linkedin: "https://www.linkedin.com/in/emily_smith",
      github: "https://github.com/emily_smith",
      portfolio: "https://emilysmith.dev",
      skills:
        "Java, Spring Boot, Hibernate, MySQL, JavaScript, React, HTML, CSS",
      experience: JSON.stringify([
        {
          title: "Backend Developer",
          company: "Tech Solutions LLC",
          start_date: "2018-01-01",
          end_date: "2020-12-31",
        },
        {
          title: "Software Engineer Intern",
          company: "Innovative Technologies Inc.",
          start_date: "2016-06-01",
          end_date: "2017-12-31",
        },
      ]),
      education: JSON.stringify([
        {
          degree: "Bachelor of Science in Computer Science",
          university: "University ABC",
          graduation_year: "2017",
        },
      ]),
      certifications: JSON.stringify([
        {
          name: "Oracle Certified Professional, Java SE Programmer",
          issued_by: "Oracle",
          year: "2018",
        },
      ]),
    },
  ]);
};
