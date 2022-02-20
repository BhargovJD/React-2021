import express from "express";
const router = express.Router();
import Product from "../models/product-model.js";
import createError from "http-errors";
import mongoose from "mongoose";

// Get Products
// Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

// Get a single product
// Public
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw createError(404, "Product does not exist");
    res.json(product);
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid product id"));
      return;
    }
    next(error);
  }
});

export default router;
