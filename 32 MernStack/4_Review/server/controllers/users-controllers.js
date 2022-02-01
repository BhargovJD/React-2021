const User = require('../models/user-model')
const bcrypt = require("bcrypt");


let DUMMY_USERS = [
    {
        id:'u1',
        name:'Max',
        email:"m@gmail.com",
        password:"12345"
    },

    {
        id:'u1',
        name:'Lama',
        email:"l@gmail.com",
        password:"12345"
    },

    {
        id:'u3',
        name:'Dev',
        email:"d@gmail.com",
        password:"12345"
    },
]
// .............................................................
const getUsers = (req,res)=>{
    res.json({users: DUMMY_USERS})

}

// ..............................................
// signup

// let existingUser
//     try{
//         existingUser = await User.findOne({email:email})
//     }
//     catch{
//          res.json("Something went wrong try again...");
//     }

//     if(existingUser){
//         res.json("Account already exist");
//     }
const signup = async (req, res) => {
    try {

      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const email = req.body.email;

    let existingUser
    try{
        existingUser = await User.findOne({email:email})
    }
    catch{
         res.json("Something went wrong try again...");
    }

    if(existingUser){
        res.json("Account already exist");
    }

      const newUser = new User({
        name: req.body.name,
        email: email,
        password: hashedPass,
        image:req.body.image,
        places:req.body.places
      });

      const user = await newUser.save();
      res.status(200).json(user);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }

// ...........................................................
const login = (req,res)=>{
    const {email, password} = req.body;

    const identifiedUser = DUMMY_USERS.find(u=>u.email === email)
    if(!identifiedUser || identifiedUser.password !== password ){
        // operation so 401
        res.status(401).json({message : "Wrong credentials"})
    }
    else{
        res.status(200).json({message: "Logged in"})
    }
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;