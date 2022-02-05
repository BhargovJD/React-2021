// console.log("Hello World")
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const db = require("./config/db")
require("dotenv").config({path :"./config/config.env"})
const app = express();


// middleware
app.use(express.json())
app.use(morgan("tiny"))
const authMiddeleware = require("./middlewires/auth-middleware")



// routes
// app.get("/", (req,res)=>{
//     res.send("Working...")
// })

const authRoute = require("./routes/auth.js")


app.use("/api/auth/", authRoute)

// Protected route
app.get("/protected", authMiddeleware, (req,res)=>{
    // res.status(200).json({user: req.user})
    res.status(200).json({...req.user._doc})
})




// server
const PORT = process.env.PORT || 8000
app.listen(PORT,  ()=>{
        db()
        console.log(`Server is running on port ${PORT}`)
})
