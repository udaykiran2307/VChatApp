const express = require("express");
const route = express.Router();
const {registerUser,authUser}= require('../controller/user.controller');


route.post('/',registerUser);
route.post('/login',authUser);

module.exports = route;
