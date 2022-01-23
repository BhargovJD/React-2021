const express = require("express")
const app = express()

const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")

const userRoute = require('./routes/user_routes')
const authRoute = require('./routes/auth_routes')
const postRoute = require('./routes/post_routes')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to mongo db")
})

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan())

// app.get("/",(req,res)=>{
//     res.send("Homepage")
// })

// app.get("/users",(req,res)=>{
//     res.send("Users")
// })

app.use('/api/users', userRoute)

app.use('/api/auth', authRoute)

app.use('/api/posts', postRoute)


app.listen(5000, ()=>{
    console.log('Server is running...')
})