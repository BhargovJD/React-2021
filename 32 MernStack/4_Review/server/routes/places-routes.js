const express = require('express')

const router = express.Router()

const placesControllers = require('../controllers/places-controllers')


// router.get('/',(req,res)=>{
//     console.log('Home page')
//     res.json({message: 'It Works'})
// })

// Getting place by their id
// http://localhost:5000/api/places/p2
router.get('/:id',placesControllers.getPlaceById)



// Getting post by user createdBy id
// http://localhost:5000/api/places/user/user2
router.get('/user/:id',placesControllers.getPlaceByUserId)


// Create new place
// http://localhost:5000/api/places/create
router.post('/create',placesControllers.createNewPlace)




module.exports = router;