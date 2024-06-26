require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenVerify = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("Unauthenticated");
  }
  const token = authorization.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.userObj = payload;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid token");
  }
};

module.exports = {
  tokenVerify,
};
