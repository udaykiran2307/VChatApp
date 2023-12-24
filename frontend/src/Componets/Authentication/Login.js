/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = ()=>{

  }
  return (
    <VStack>
      <FormControl id="email" isRequired="true">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </FormControl>
      <FormControl id="password" isRequired="true">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <InputRightElement>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};
