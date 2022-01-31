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
const getPlaceById = (req,res)=>{
    const placeId = req.params.id
    const place  = DUMMY_PLACES.find((p)=>{
        return p.id == placeId
    })

    if(!place){
        return res.status(404).json({message:"Could not find a place for the provided id."})
    }

    res.json({place: place})

}

// .................................................
// Get places by createdBy id
const getPlaceByUserId = (req,res)=>{
    const userId = req.params.id
    const place  = DUMMY_PLACES.filter((p)=>{
        return p.createdBy == userId
    })

    if(!place || place.length === 0){
        return res.status(404).json({message:"Could not find a place for the provided createdBy id."})
    }

    res.json({place: place})

}
// ..................................................
// Adding new place
const createNewPlace = (req,res)=>{

    const {id,title,desc,createdBy} = req.body

    const createdPlace = {
        id:id,
        title:title,
        desc:desc,
        createdBy:createdBy
    }

    const added = DUMMY_PLACES.push(createdPlace);

    if(!added){
        return res.status(404).json({message:"Failed added operation"})
    }

    res.status(201).json({new_place: createdPlace})

}

// ..........................................................
// Edit place by id
const updatePlaceById  = (req,res)=>{
    const {title,desc} = req.body;
    const placeId = req.params.id;

    if(title,desc === ""){
        return res.json({message:"All fields are required"})
    }

    const updatedPlace  = {...DUMMY_PLACES.find(p=>p.id === placeId)}
    const placeIndex = DUMMY_PLACES.findIndex(p=>p.id === placeId);

    updatedPlace.title = title;
    updatedPlace.desc = desc;

    DUMMY_PLACES[placeIndex] = updatedPlace

    res.status(200).json({place: updatedPlace})

}


// Delete place by id
const deletePlaceById  = (req,res)=>{
    const placeId = req.params.id;

    if(!DUMMY_PLACES.find(p=>p.id === placeId)){
        return res.json({messege:"post is not available.."})
    }

    DUMMY_PLACES = DUMMY_PLACES.filter(p=>p.id !== placeId)
    res.status(200).json({new_place: DUMMY_PLACES})

}



exports.getPlaces = getPlaces;
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createNewPlace = createNewPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlaceById = deletePlaceById;

