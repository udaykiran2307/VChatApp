/* eslint-disable import/no-anonymous-default-export */

import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import Login from "../Componets/Authentication/Login.js";
import SignUp from "../Componets/Authentication/SignUp";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
export default () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      history.push("/chats");
    }
  }, []);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg={"cyan"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <ChatIcon color={"darkGreen"} />
        <Text textAlign={"center"} fontSize={"4xl"} color={"black"}>
          DeV-Chat
        </Text>
        <ChatIcon color={"darkGreen"} />
      </Box>
      <Box
        bg={"white"}
        w={"100%"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        padding={"1rem"}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
