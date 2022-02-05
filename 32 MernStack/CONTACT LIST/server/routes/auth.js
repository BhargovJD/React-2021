const router = require("express").Router();
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken")

// signup
router.post("/register", async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });

      const user = await newUser.save();
      user._doc.password = undefined
      res.status(200).json(user);

    }
    catch (err) {
      res.status(500).json(err);
    }
  });


  //LOGIN
router.post("/login", async (req, res) => {

    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(400).json("Wrong credentials!");

      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");

      if(validated){
          const payload = {_id: user._id};
          const token = jsonwebtoken.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"})
        //   const { password, ...others } = user._doc;
          res.status(200).json(token);
      }
    }

    catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router
