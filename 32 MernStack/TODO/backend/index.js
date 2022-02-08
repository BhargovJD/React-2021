const express = require("express");
const app = express()
const mongoose = require("mongoose");
const cors = require("cors");
const todosRoute = require("./routers/todos-routes");
const signupRoute = require("./routers/user-signup-routes");


// require("dotenv").config();

app.use(cors())
app.use(express.json())

// routes(middleware)
app.use("/api/todos/",todosRoute)
app.use("/api/signup/",signupRoute)

app.get("/", (req, res) => {
    res.send("welcome to the todos api...");
  });

// const db = process.env.DB_URL
const port = process.env.port||5000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

mongoose.connect("mongodb+srv://admin:qwertymong0@cluster0.vy0sa.mongodb.net/todo_db?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected!")
})
.catch((error)=>{
    console.log("DB Connection failed:", error.message)
})
