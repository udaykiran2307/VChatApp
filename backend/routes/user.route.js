const express = require("express");
const route = express.Router();
const {registerUser,authUser, allUsers}= require('../controller/user.controller');
const { protect } = require("../middlewares/auth.middleware");


route.post('/',registerUser);
route.post('/login',authUser);
route.get('/',protect,allUsers)
module.exports = route;
