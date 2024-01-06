const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const route = express.Router();
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controller/chat.controller");
route.post("/", protect, accessChat);
route.get("/", protect, fetchChats);
route.post("/group", protect, createGroupChat);
route.put("/rename", protect, renameGroup);
route.put("/groupadd", protect, addToGroup);
route.put("/groupremove", protect, removeFromGroup);

module.exports = route;
