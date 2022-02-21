import express, { json } from "express";
const router = express.Router();
import User from "../models/user-model.js";
import createError from "http-errors";
import mongoose from "mongoose";
import generateToken from "./../utils/generateToken.js";
import protect from "./../middleware/auth-middleware.js";

// auth user and get a token
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  try {
    if (user && (await user.matchPassword(password))) {
      return res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      next(createError(401, "Invalid email or password"));
    }
  } catch (error) {
    next(error);
  }
});

// Get user profile
router.get("/profile", protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    next(createError(404, "User not found"));
  }
});

// Signup
router.post("/signup", async (req, res, next) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    next(createError(400, "User already exist.."));
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    createError(400, "Invalid user data");
  }
});

export default router;
