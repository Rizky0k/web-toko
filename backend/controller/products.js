const express = require("express");
const Product = require("../model/product");

const escapeRegex = require("../utils/exceptRegex");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.send({ status: "success", results: product });
  } catch (error) {
    res.send({ status: "failed", results: error.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const name = escapeRegex(req.query.name);
    const regex = new RegExp(name, "i");
    const product = await Product.find({ name: { $regex: regex } });
    res.send({ status: "success", results: product });
  } catch (error) {
    res.send({ status: "failed", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, category, price, note } = req.body;
    const product = await Product.insertMany({
      name: name,
      category: category,
      price: price,
      note: note,
    });
    res.send(product);
  } catch (error) {
    res.send({ status: "failed", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params["id"];
  const { name, category, price, note } = req.body;
  const product = await Product.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name: name,
        category: category,
        price: price,
        note: note,
      },
    }
  );
  res.send(product);
});

module.exports = router;
