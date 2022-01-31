const express = require('express')
const bodyParser = require('body-parser')

// importing routes
const placesRoutes = require('./routes/places-routes')


const app = express()
app.use(bodyParser.json())

// using routes
app.use('/api/places/',placesRoutes)


// starting server
app.listen(5000)