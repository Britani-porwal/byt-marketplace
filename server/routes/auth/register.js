const express = require("express");

const User = require("../../models/user");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

router.route("/auth/register").post(async function (req, response) {
  try {
    const { email, username, password } = req.body;

    const userEmail = await User.findOne({ email });
    const existingUser = await User.findOne({ username });

    if (userEmail) {
      return response.status(400).json({ message: "User already exists" });
    } else if (existingUser) {
      return response.status(400).json({ message: "Username already taken" });
    }

    const newUser = new User({ email, username, password });
    await newUser.save();

    response.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
