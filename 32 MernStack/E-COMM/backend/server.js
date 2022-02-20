import express from "express";
import dotenv from "dotenv";
import connDB from "./config/db.js";
import colors from "colors";
import createError from "http-errors";

dotenv.config();
const app = express();
connDB();

// app.use((req,res,next)=>{
//   console.log('hello')
//   next()
// })

app.get("/", (req, res) => {
  res.send("Home page");
});

import productRoute from "./routes/product-routes.js";

app.use("/api/products", productRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
  
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
