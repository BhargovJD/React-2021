const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')


// importing routes
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')


const app = express()
app.use(bodyParser.json())
app.use(cors())


// using routes
app.use('/api/places/',placesRoutes)
app.use('/api/users/',usersRoutes)


// starting server
mongoose.connect('mongodb+srv://admin:qwertymong0@cluster0.et3ce.mongodb.net/hotel_listing?retryWrites=true&w=majority').then(()=>{app.listen(5000)}).catch((err)=>{console.log(err)})
