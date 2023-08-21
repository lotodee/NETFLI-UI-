const router = require("express").Router();
const dotenv = require("dotenv");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
dotenv.config();
//REGISTER

router.post("/register", async (req, res) => {

    const encryptedPassword = CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()

    const newUser = new User( {
        email:req.body.email,
        password:encryptedPassword,
        username:req.body.username
    }
    )

    try{
    const user = await newUser.save()
    const {password, ...info } = user._doc;
res.status(200).json(info)

    }
    catch(err){
        res.status(500).json(err)
    }




});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong passwprd or username");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong passwprd or username");

    const accesstoken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    const { password, ...info } = user._doc;
    res.status(200).json({...info, accesstoken});
    console.log(info)

    console.log(accesstoken)
  } catch (Err) {
    res.status(500).json(Err);
  }  
});

module.exports = router;



// const encryptedPassword = CryptoJS.AES.encrypt(
//     req.body.password,
//     process.env.SECRET_KEY
//   ).toString();
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: encryptedPassword,
//   });

//   try {
//     const user = await newUser.save();
//     res.status(201).json(user);
//   } catch (Err) {
//     res.status(500).json(Err);
//   }