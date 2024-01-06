/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useState, useEffect } from "react";
import { ChatState } from "../Context/chatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../Componets/Miscellaneous/sideDrawer";
import MyChats from "../Componets/MyChats";
import ChatBox from "../Componets/ChatBox";
export default () => {
 
 const {user} = ChatState();
 const [fetchAgain ,setFetchAgain]=useState(false);

  return (
    <div style={{width:'100%' }}>
      { user && <SideDrawer/>}
        <Box
        display={'flex'}
        justifyContent={'space-between'}
        width={'100%'}
        height={'92vh'}
        padding={'10px'}
        >
           {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>} 
           {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>} 
        </Box>
      
      
    </div>
  );
};
