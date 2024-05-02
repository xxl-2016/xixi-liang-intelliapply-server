const axios = require("axios");
const knex = require("knex")(require("../knexfile"));

const generateCoverLetter = async (username) => {
  try {
    const resumeData = await knex("resumes").where({ username }).first();
    if (!resumeData) {
      console.error(`Resume not found for username ${username}`);
    }
    const resumeText = `Write a cover letter\n\nID: ${
      resumeData.id
    }\nUsername: ${resumeData.username}\nFirst Name: ${
      resumeData.first_name
    }\nLast Name: ${resumeData.last_name}\nEmail: ${resumeData.email}\nPhone: ${
      resumeData.phone
    }\nLocation: ${resumeData.location}\nLinkedIn: ${
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
