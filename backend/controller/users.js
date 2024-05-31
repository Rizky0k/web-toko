const express = require("express");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../utils/auth");

router.get("/register", auth, async (req, res) => {
  const user = await User.find();
  res.json(user);
  // res.send("JAN JOSSS TENAN");
});
router.post("/register", async (req, res) => {
  const { name, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ name, username, password: hashedPassword });
  await user.save();
  res.send("User Registered");
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.send({ error: "Username or Password are invalid" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.send({ error: "Username or Password are invalid" });
    const token = jwt.sign({ username, password }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    const response = {
      status: "success",
      token: token,
      result: user,
    };
    res.json(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
