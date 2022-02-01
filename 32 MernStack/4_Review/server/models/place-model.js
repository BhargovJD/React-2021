const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const placeSchema = new Schema({
    title: { type:String, required: true },
    description: { type:String, required: true },
    image: { type:String, required:true },
    address: { type:String, required:true },
    // price: {
    //     starting_price: { type:Number, required:true },
    //     ending_price: { type:Number, required:true },
    //         },

    // Posted by single user : will contain user id
    posted_by: { type: mongoose.Types.ObjectId, required:true, ref:'User' }
});


module.exports = mongoose.model('Place', placeSchema)