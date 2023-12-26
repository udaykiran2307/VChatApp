const express = require('express');
const route = express.Router();
const userRoute = require('./user.route');
const chatRoute = require('./chat.route')
route.use('/user',userRoute);
route.use('/chat',chatRoute);

module.exports = route