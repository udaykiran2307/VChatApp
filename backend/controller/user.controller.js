const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const generateToken = require("../config/generateJwt");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all required Fields");
  }

  const isUserExists = await User.findOne({ email });
  if (isUserExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if(!email||!password){
    res.status(400).send("Either email or Password is missing");

  }
  const user = await User.findOne({email});
  if(!user){
    res.status(404)
    throw new Error("user doesnot exist,please register to login");
  }
  else{
    if(await user.matchPassword(password)){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }
    res.status(400)
    throw new Error("password doesn't match");
  }
});

module.exports = { registerUser ,authUser};
