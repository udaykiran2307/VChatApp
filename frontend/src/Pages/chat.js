/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useState, useEffect } from "react";
export default () => {
  const [chats, setChats] = useState([]);
  const fetchChatData = async () => {
    const chatData = await axios.get("/api/chat");
    // console.log(chatData)
    const { data } = chatData;
    // console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChatData();
  }, []);

  return (
    <div>
      {chats.map((e )=> (
        <h1 key={e._id}>{e.chatName}</h1>
      ))}
    </div>
  );
};
