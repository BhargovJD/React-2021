const DUMMY_PLACES = [
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
        createdBy:'user3'
    },
]
// ................................................

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
const getPlaceByUserId = (req,res)=>{
    const userId = req.params.id
    const place  = DUMMY_PLACES.find((p)=>{
        return p.createdBy == userId
    })

    if(!place){
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

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createNewPlace = createNewPlace;
