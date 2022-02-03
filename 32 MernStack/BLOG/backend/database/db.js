import mongoose from 'mongoose'
const URL = "mongodb+srv://bhargov:qwertymong0@cluster0.5nbu6.mongodb.net/blog_db?retryWrites=true&w=majority"

const connection = async ()=>{
    try{
        mongoose.connect(URL, ()=>{
        console.log("Mongo db connected!")
        })
    }
    catch(error){
        console.log("Error while connecting", error)
    }

}

export default connection