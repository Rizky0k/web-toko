const express = require("express");
const dbConnect = require("./utils/db");
const Product = require("./model/product");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/", require("./controller/products"));

dbConnect().then((conn) => {
  conn.once("open", async () => {
    app.listen(port, () => {
      console.log(`Listening to http://localhost:${port}`);
    });
  });
});
