const express = require("express");
const Product = require("../model/product");

const escapeRegex = require("../utils/exceptRegex");
const auth = require("../utils/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1);
    const pageSize = parseInt(req.query.pageSize || 100);
    const sort = req.query.sort || "asc";

    const name = escapeRegex(req.query.name || "");
    const regex = new RegExp(name, "i");
    // const product = await Product.find({ name: { $regex: regex } });
    const product = await Product.find({ name: { $regex: regex } }).sort({
      name: sort,
    });

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedProduct = product.slice(startIndex, endIndex);

    const totalPages = Math.ceil(product.length / pageSize);

    const totalProduct = product.length;
    const totalProductInPage = paginatedProduct.length;

    const response = {
      status: "success",
      totalPages,
      totalProductInPage,
      totalProduct,
      results: paginatedProduct,
    };
    res.json(response).status(200);
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

router.post("/", auth, async (req, res) => {
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
  try {
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

    const response = {
      status: "Success",
      results: product,
    };
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", auth, async (req, res) => {
  const id = req.params["id"];
  const product = await Product.deleteOne({ _id: id });
  res.send(product);
});
module.exports = router;
