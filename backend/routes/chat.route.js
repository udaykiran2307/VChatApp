const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const route = express.Router();
const{accessChat, fetchChats} = require('../controller/chat.controller')
route.post('/',protect,accessChat);
route.get('/',protect,fetchChats);
// route.post('/group',protect,createGroupChat);
//route.put('/rename',protect,renameGroupName);
// route.put('/groupremove',protect,removeFromGroup);
//route.put('/groupadd',protect,addToGroup)



module.exports = route;
