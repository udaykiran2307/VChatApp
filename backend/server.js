const express = require("express");
const app = express();
const {chats} = require('./data/data.js')
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server is started and Running on Port',PORT);
})

app.get('/',(req,res)=>{
  res.send("API is Running")
})

app.get('/api/chat',(req,res)=>{
   res.status(200).send(chats); 
})

app.get('/api/chat/:chatId',(req,res)=>{
    const Id = req.params.chatId;
    console.log(Id);
    const chatById = chats.find((e)=>e._id === Id);
    res.send(chatById);
})