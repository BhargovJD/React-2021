const express = require("express")
const app = express()
const dotenv= require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')

app.use(cors())


// Routers
const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

const multer = require("multer");
// const path = require("path");



dotenv.config();
app.use(express.json())


mongoose.connect(process.env.MONGO_URL).then(
    console.log('Mongodb connected')
);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, "hello.jpg");
    },
  });


const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// app.use("/",(req,res)=>{
//     console.log("Home")
// })

app.use("/api/auth/", authRoute)
app.use("/api/users/", userRoute)
app.use("/api/posts/", postRoute)
app.use("/api/categories/", categoryRoute)

app.listen("5000",()=>{
    console.log("Server is running...")
})
