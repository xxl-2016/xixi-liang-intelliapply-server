const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const signUpRouter = require("./routes/signup");
const jobRouter = require("./routes/job");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6060;

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/signup", signUpRouter);
app.use("/jobs", jobRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
