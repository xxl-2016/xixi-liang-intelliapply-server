const axios = require("axios");

const getJobList = async (keywords) => {
  const options = {
    method: "GET",
    url: "https://linkedin-api8.p.rapidapi.com/search-jobs-v2",
    params: {
      keywords: keywords || "developer",
      locationId:
        "103366113" || "90009553" || "100216049" || "105376518" || "92000000",
      datePosted: "anyTime",
      sort: "mostRelevant",
    },
    headers: {
      "X-RapidAPI-Key": "5e2d2029e8mshc43b0fa675a95b7p1a2cc8jsnfd6d69ce0a2b",
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
      "X-RapidAPI-Key": "5e2d2029e8mshc43b0fa675a95b7p1a2cc8jsnfd6d69ce0a2b",
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
