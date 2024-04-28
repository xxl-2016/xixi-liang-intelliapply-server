const axios = require("axios");

const getJobList = async (keywords) => {
  const options = {
    method: "GET",
    url: "https://linkedin-api8.p.rapidapi.com/search-jobs",
    params: {
      keywords: keywords || "developer",
      locationId: "92000000",
      datePosted: "anyTime",
      sort: "mostRelevant",
    },
    headers: {
      "X-RapidAPI-Key": "c7cadda697msh4e102cf079853b7p11e7a8jsn66a7ae3482e2",
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

module.exports = {
  getJobList,
};
