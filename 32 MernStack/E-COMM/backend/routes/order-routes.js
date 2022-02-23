import Order from "./../models/order-model.js";
import User from "../models/user-model.js";
import express from "express";
const router = express.Router();
import createError from "http-errors";
import mongoose from "mongoose";
import protect from "./../middleware/auth-middleware.js";

router.post("/", protect, async (req, res, next) => {
  const { user, orderItems, shippingAddress, payment, totalPrice } = req.body;

  try {
    const order = await Order.create({
      user,
      orderItems,
      shippingAddress,
      payment,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    next(error);
  }
});

export default router;
