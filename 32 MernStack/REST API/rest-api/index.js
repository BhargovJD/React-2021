// console.log("Hello");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const createError = require('http-errors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res, next) => {
//   console.log(req.url);
//   console.log(req.method);
//   res.send("Home route");
// });

try {
  mongoose.connect(
    "mongodb+srv://admin:qwertymong0@cluster0.7alqk.mongodb.net/rest_api_db?retryWrites=true&w=majority"
  );
  console.log("Mongo db connected!");
} catch (error) {
  console.log(error);
}

const productRoute = require("./routes/product-routes");

app.use("/products", productRoute);

// 404 Error handle
app.use((req, res, next) => {
//   const e = new Error("Not found...");
//   e.status = 404;
//   next(e);
next(createError(404, "Page Not Found"))
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
