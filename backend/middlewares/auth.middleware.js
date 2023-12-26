const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.SECRET_PHRASE);
      console.log(decode);
      req.user = await User.findById(decode.id).select("-password");
      console.log(req.user);
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized , token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , token failed");
  }
});

module.exports = { protect };
