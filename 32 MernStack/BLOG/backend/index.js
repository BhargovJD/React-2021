import express from 'express'
import connection from './database/db.js'
import Router from './router/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

app.use('/',Router)
const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


connection()