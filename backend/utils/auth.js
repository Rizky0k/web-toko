const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "../.env" });

const jwtAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const response = {
    error: "ndak punya kewenangan kamu mas",
  };
  if (!token) return res.send(response);

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    if (err) return res.send(err);
    req.user = user;
    next();
  });
};

module.exports = jwtAuth;
