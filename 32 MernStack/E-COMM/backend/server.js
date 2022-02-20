import express from "express";
import dotenv from "dotenv";
import connDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

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
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
