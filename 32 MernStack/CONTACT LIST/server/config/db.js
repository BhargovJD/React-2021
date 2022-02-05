const mongoose = require('mongoose')
const db = async()=>{
    try{
        mongoose.connect("mongodb+srv://admin:qwertymong0@cluster0.vy0sa.mongodb.net/contact_db?retryWrites=true&w=majority")
        console.log("DB Connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = db