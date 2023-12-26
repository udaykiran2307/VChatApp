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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const handleClick = () => {
    setShow(!show);
  };
  const submitHandler = async () => {
    console.log("clicked");
    setLoading(true);
    if (!password || !email) {
      toast({
        title: "email or password or both are empty",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } else {
      try {
        const config = {
          headers: { "content-type": "application/json" },
        };
        const { data } = await axios.post(
          "/api/user/login",
          { email, password },
          config
        );
        toast({
          title: "login is successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        history.push("/chats");
      } catch (err) {
        console.log(err);
        toast({
          title: "Internal Server error",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    }
  };
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
        loading={loading}
      >
        Login
      </Button>
    </VStack>
  );
};
