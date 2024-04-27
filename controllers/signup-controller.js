const knex = require("knex")(require("../knexfile"));

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log("Username:", username);
    console.log("Email:", email);

    const existingUser = await knex("users")
      .where("username", username)
      .orWhere("email", email)
      .first();

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already in use" });
    }

    await knex("users").insert({ username, email, password });

    return res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.error("Error signing up user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signUp,
};
