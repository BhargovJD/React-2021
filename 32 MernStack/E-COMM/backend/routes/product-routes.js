import express from "express";
const router = express.Router();
import Product from "../models/product-model.js";

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
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.json(error);
  }
});

export default router;
