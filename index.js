const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6060;

const homePageRoutes = require("./routes/homePage-routes");
const aboutUsPageRoutes = require("./routes/aboutUsPage-routes");
const jobListPageRoutes = require("./routes/jobListPage-routes");
const generatorPageRoutes = require("./routes/generatorPage-routes");
const resumeUploadPageRoutes = require("./routes/resumeUploadPage-routes");
const userProfilePageRoutes = require("./routes/userProfilePage-routes");

app.use("/", homePageRoutes);
app.use("/about-us", aboutUsPageRoutes);
app.use("/job-list", jobListPageRoutes);
app.use("/generator", generatorPageRoutes);
app.use("/resume-upload", resumeUploadPageRoutes);
app.use("/user-profile", userProfilePageRoutes);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
