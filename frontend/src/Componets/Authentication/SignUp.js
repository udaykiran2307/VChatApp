/* eslint-disable import/no-anonymous-default-export */

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  
  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = ()=>{

  }
  const submitHandler = ()=>{

  }

  return (
      <VStack>
        <FormControl id="name" isRequired="true">
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </FormControl>
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
        <FormControl id="confirmPassword" isRequired="true">
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
            <InputRightElement>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id='pic'>
            <FormLabel>
                Upload Profile Pic
            </FormLabel>
            <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e)=>postDetails(e.target.files[0])}
            />
        </FormControl>
        <Button
        colorScheme="green"
        width='100%'
        style={{marginTop:15}}
        onClick={submitHandler}
        >
         SignUp   
        </Button>
      </VStack>
    
  );
};
