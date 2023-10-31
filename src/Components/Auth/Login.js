import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Center, Flex, FormControl, Image, Input } from "@chakra-ui/react";
import userActions from "../../helpers/userActions";
import Navbar from "../Navbar/Navbar";
import loginImage from './Login-Photo.png';

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => 
    setInput({
        ...input,
        [e.target.type]: e.target.value
    });

    const handleSignIn = (e) => {
        e.preventDefault();
        userActions.login(input.email, input.password).then((userData) => {
            if(!Object.keys(userData).includes("error")) {
                // console.log(userData);
                localStorage.setItem('user', userData);
                // setAuthenticated(true);
                navigate("/");
            } else {
                console.log("Error by Login:", userData.error);
            }
        });
    }

    return (
        <Box>
        <Flex>
            <Box w="50%">
                <Image src={loginImage} alt="login page photo"/>
            </Box>
            <Center w="50%" h="200%" rounded="3em" p="10" bg="white">
                <Box flex="1" p="10" >
                    <Form onSubmit={handleSignIn}>
                        <div>
                            <FormControl>
                            <Input
                                h="50px"
                                boxShadow="lg" 
                                rounded="2xl"
                                placeholder="email"
                                background="white"
                                mt={12}
                                type="email"
                                value={input.email}
                                onChange={handleInput}
                            />
                            <div>
                                <Input
                                    h="50px"
                                    boxShadow="lg" 
                                    rounded="2xl"
                                    placeholder="password"
                                    color="black"
                                    background="white"
                                    mt={8}
                                    type="password"
                                    value={input.password}
                                    onChange={handleInput}
                                />
                            </div>
                            {/* {error && <p style={{color: 'red'}}>{error}</p>} */}
                            <Center>
                                <Button w="50%" h="50px" textColor="#184E77" background="#FCA311" boxShadow="lg" rounded="2xl" mt={8} type='submit' fontWeight="light">Login</Button>
                            </Center>
                            </FormControl>
                        </div>
                    </Form>
                </Box>
            </Center>
            </Flex>
        </Box>
    );

}

export default Login;