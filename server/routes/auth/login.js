const express = require("express");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.route("/auth/login").post(async function (req, res) {
  try {
    const { username, password } = req.body;

    // Finding user in database
    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({ message: "Invalid username or password" });

    // Checking if password is correct
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid username or password" });

    const token = jwt.sign({ userId: user._id }, "abra-ka-dabra", {
      expiresIn: 60,
    });

    res.json({ token, message: "User successfully logged In" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
