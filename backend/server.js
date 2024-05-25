const express = require("express");
const dbConnect = require("./utils/db");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/product", require("./controller/products"));
app.use("/user", require("./controller/users"));

dbConnect().then((conn) => {
  conn.once("open", async () => {
    app.listen(port, () => {
      console.log(`Listening to http://localhost:${port}`);
    });
  });
});
module.exports = app;
