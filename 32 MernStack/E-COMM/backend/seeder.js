import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";

import User from "./models/user-model.js";
import Product from "./models/product-model.js";
import Order from "./models/order-model.js";

import connDB from "./config/db.js";

dotenv.config();

connDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported");
  } catch (error) {
    console.error(`${error}`.red.inverse);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed");
  } catch (error) {
    console.error(`${error.message}`);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}

// node seeder.js
