const axios = require("axios");

const getJobList = async (keywords) => {
  const options = {
    method: "GET",
    url: "https://linkedin-api8.p.rapidapi.com/search-jobs",
    params: {
      keywords: keywords || "developer",
      locationId:
        "103366113" || "90009553" || "100216049" || "105376518" || "92000000",
      datePosted: "anyTime",
      sort: "mostRelevant",
    },
    headers: {
      "X-RapidAPI-Key": "f6b53dcb05msh801830548061372p190acejsn3ac3d8f3ec34",
      "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching job list:", error);
    throw error;
  }
};

const getJobDetails = async (jobId) => {
  const options = {
    method: "GET",
    url: "https://linkedin-api8.p.rapidapi.com/get-job-details",
    params: { id: jobId || "3738360408" },
    headers: {
      "X-RapidAPI-Key": "f6b53dcb05msh801830548061372p190acejsn3ac3d8f3ec34",
      "X-RapidAPI-Host": "linkedin-api8.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getJobList,
  getJobDetails,
};
