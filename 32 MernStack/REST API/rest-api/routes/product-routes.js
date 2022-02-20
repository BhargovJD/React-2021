const express = require("express");
const router = express.Router();
const Product = require("../models/product-model");
const createError = require("http-errors");
const mongoose = require("mongoose");

// GET ALL PRODUCTS
router.get("/", async (req, res, next) => {
  // next(new Error("Home not found..."));

  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log(error.message);
  }
});

// POST PRODUCT
router.post("/", async (req, res, next) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
    });

    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    if(error.name === "validationError"){
        next(createError(422, error.message))
    }
    next(error)
  }
});

// GET PRODUCT BY ID
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);

    if (!product) throw createError(404, "Product does not exist...");
    res.send(product);
  } catch (error) {
    // console.log(error.message);
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid product id"));
      return;
    }
    next(error);
  }
});

// UPDATE PRODUCT BY ID
router.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) throw createError(404, "Product does not exist...");

    res.send(product);
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid product id"));
      return;
    }
    next(error);
  }
});

// DELETE PRODUCT BY ID
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw createError(404, "Product does not exist...");
    res.send(product);
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid product id"));
      return;
    }
    next(error);
  }
});

module.exports = router;
