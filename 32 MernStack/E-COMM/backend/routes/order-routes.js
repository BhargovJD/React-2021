import Order from "./../models/order-model.js";
import User from "../models/user-model.js";
import express from "express";
const router = express.Router();
import createError from "http-errors";
import mongoose from "mongoose";
import protect from "./../middleware/auth-middleware.js";

// Submit order
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

// Get order by id
router.get("/:id", protect, async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) throw createError(404, "Order does not exist");
    res.json(order);
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid order id"));
      return;
    }
    next(error);
  }
});

// Update order to paid
// router.put("/:id/pay", protect, async (req, res, next) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) throw createError(404, "Order does not exist");

//     if (order) {
//       order.isPaid = true;
//       order.paidAt = Date.now();
//       order.paymentResult = {
//         id: req.body.id,
//         status: req.body.status,
//         update_time: req.body.update_time,
//         email_address: req.body.email_address,
//       };
//       const updatedOrder = await Order.save();
//       res.json(updatedOrder);
//     }
//   } catch (error) {
//     next(createError(error));
//   }
// });

// Get logged in user orders
// Public
router.get("/orders/myorders", protect, async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    if (!orders) throw createError(404, "Your order list is empty!");
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

export default router;
