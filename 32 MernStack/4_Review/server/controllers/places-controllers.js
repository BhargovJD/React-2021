const Place = require('../models/place-model')
const mongoose = require('mongoose')
const User = require('../models/user-model')

let DUMMY_PLACES = [
    {
        id:'p1',
        title:'College',
        desc:'This is a college',
        createdBy:'user1'
    },

    {
        id:'p2',
        title:'University',
        desc:'This is an university',
        createdBy:'user2'
    },

    {
        id:'p3',
        title:'School',
        desc:'This is a school',
        createdBy:'user1'
    },
]
// ................................................
//
const getPlaces = (req,res)=>{
    res.json({users: DUMMY_PLACES})

}
// ..........................
// Get place by place id
const getPlaceById = async (req,res)=>{

    const placeId = req.params.id
    try{
        const place  = await  Place.findById(placeId)
        res.status(200).json(place);
    }
    catch (err) {
        res.status(500).json(err);
      }
    };

// .................................................
// Get places by createdBy id
const getPlaceByUserId = async (req,res)=>{
    try{
        const userId = req.params.id
        const place  = await Place.find({posted_by:userId})
        res.status(200).json(place);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
// ..................................................
// Adding new place
const createNewPlace = async (req,res)=>{
    const newPlace = new Place({
        title:req.body.title,
        description:req.body.description,
        image:req.body.image,
        address:req.body.address,
        posted_by:req.body.posted_by
    });

    let user;
    try{
        user = await User.findById(req.body.posted_by)

    }catch(err){
        res.json(err)
    }
    console.log(user)

    if(!user){
        return res.json({message:"User not found"})

    }

    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();

        const savedPlace = await newPlace.save({session: sess})

        user.places.push(savedPlace)

        await user.save({session: sess})

        sess.commitTransaction()

        // const savedPlace = await newPlace.save()
        res.json({savedPlace})
    }
    catch{
        res.json({message:"Error"})
    }
}

// ..........................................................
// Edit place by id
const updatePlaceById  = async (req,res)=>{
    const {title,description} = req.body;

    const placeId = req.params.id;

    if(title,description === ""){
        return res.json({message:"All fields are required"})
    }

    let place;
    try{
        place = await Place.findById(placeId)
    }
    catch(err){
        res.status(500).json(err);
    }

    place.title = title;
    place.description = description;

    try{
        await place.save()
        res.status(200).json({place});

    }
    catch (err) {
        res.status(500).json(err);
      }


}


// Delete place by id
const deletePlaceById  = async (req,res)=>{
    const placeId = req.params.id;

    let place;
    try{
        place = await Place.findById(placeId).populate('posted_by')
    }
    catch{
        res.status(200).json({message:"No place detected"});
    }

    try{
        place
    }catch{
        res.status(404).json({message:"Place id not available"})
    }

    try{
        const sess = await mongoose.startSession()
        sess.startTransaction()
        await place.remove({session: sess})

        place.posted_by.places.pull(place)

        await place.posted_by.save({session: sess})

        await sess.commitTransaction()

        res.status(200).json({message:"Deleted..."});
    }
    catch {
        // res.status(500).json(err);
        res.status(200).json({message:"Something went wrong..."});
      }


}



exports.getPlaces = getPlaces;
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createNewPlace = createNewPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlaceById = deletePlaceById;
