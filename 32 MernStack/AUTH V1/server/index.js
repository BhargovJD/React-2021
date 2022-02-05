const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json())

const db = config.get('mongoURI')

mongoose.connect(db, ()=>{
    console.log("DB connected!")
})

// Rotes
app.use('/api/users', require('./routes/user-routes.js'))

app.listen(5000, ()=>{
    console.log("Server is running...")
})