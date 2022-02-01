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
        places:[]
      });

      const user = await newUser.save();
      res.status(200).json(user);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }

// ...........................................................
// Login
const login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(400).json("Wrong credentials!");

      const validated = await bcrypt.compare(req.body.password, user.password);

      !validated && res.status(400).json("Wrong credentials!");

      const { password, ...others } = user._doc;
      res.status(200).json(others);

    }

    catch (err) {
      res.status(500).json(err);
    }
  };


// Get all users
const getUsers = async (req, res) => {
    try {
      const user = await User.find({}, '-password');
    //   const { password, ...others } = user._doc;
      res.status(200).json({user});
    }

    catch (err) {
      res.status(500).json(err);
    }
  };


exports.signup = signup;
exports.login = login;
exports.getUsers = getUsers;
