const mongoose = require('mongoose')

const connDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo db conected")
    }
    catch(err){
        console.log(err)
        process.exit()
    }
}

module.exports = connDb