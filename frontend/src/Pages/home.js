/* eslint-disable import/no-anonymous-default-export */

import { Container, Box, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
export default () => {
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
        <ChatIcon  color={"darkGreen"}/>
        <Text textAlign={"center"} fontSize={"4xl"} color={"black"}>
         
          DeV-Chat
          
        </Text>
        <ChatIcon  color={"darkGreen"}/>
      </Box>
      <Box></Box>
    </Container>
  );
};
