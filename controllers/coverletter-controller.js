const axios = require("axios");
const knex = require("knex")(require("../knexfile"));
const coverLetterTemplate = require("../data/cover-letter-template/cover-letter-template.json");

const generateCoverLetter = async (username, jobId) => {
  try {
    const resumeData = await knex("resumes").where({ username }).first();
    if (!resumeData) {
      console.error(`Resume not found for username ${username}`);
    }
    let jobData;
    if (jobId) {
      jobData = await knex("jobs").where({ id: jobId }).first();
      if (!jobData) {
        console.error(`Job not found for jobId ${jobId}`);
      }
    }
    const currentDate = new Date().toLocaleDateString();
    const resumeText = `Write a cover letter by using ${currentDate} and ${coverLetterTemplate} as reference\n
    replace the following placeholders with the actual data\n
    the company I will apply is ${jobData.company_name} and the job title is ${
      jobData.job_title
    }/n as advertised on LinkedIn\ncompany location is ${jobData.location}\n
    ID: ${resumeData.id}\nUsername: ${resumeData.username}\nMy name is: ${
      resumeData.first_name + " " + resumeData.last_name
    }\nMy Email is: ${resumeData.email}\nMy Phone Number is : ${
      resumeData.phone
    }\nMy Address is: ${resumeData.location}\nLinkedIn: ${
      resumeData.linkedin
    }\nGitHub: ${resumeData.github}\nPortfolio: ${
      resumeData.portfolio
    }\nSkills: ${resumeData.skills}\nExperience:\n${resumeData.experience
      .map(
        (exp) =>
          `- Title: ${exp.title}\n  Company: ${exp.company}\n  Start Date: ${exp.start_date}\n  End Date: ${exp.end_date}`
      )
      .join("\n")}\nEducation:\n${resumeData.education
      .map(
        (edu) =>
          `- Degree: ${edu.degree}\n  University: ${edu.university}\n  Graduation Year: ${edu.graduation_year}`
      )
      .join("\n")}\nCertifications:\n${resumeData.certifications
      .map(
        (cert) =>
          `- Name: ${cert.name}\n  Issued By: ${cert.issued_by}\n  Year: ${cert.year}`
      )
      .join("\n")}`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: resumeText,
            },
          ],
        },
      ],
    };
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDIV-55iRd0tpCLZ4DbPgnIDJ_fVOoFhYU";
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching resume:", error);
  }
};

module.exports = { generateCoverLetter };
