import React, { useContext, useState } from "react";
import axios from "axios";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Center, FormControl, Input } from "@chakra-ui/react";
import userActions from "../../helpers/userActions";
import Navbar from "../Navbar/Navbar";

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
            <Navbar/>
            <Center>
                <Box boxShadow="lg" w="50%" h="350px" rounded="3em" p="10" bg="white" background='#E0E9BE'>
                    <Form onSubmit={handleSignIn}>
                        <div>
                            <FormControl>
                            <Input 
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
                                <Button textColor="#184E77" background="#76C893" color="blue" boxShadow="lg" rounded="2xl" mt={8} type='submit' fontWeight="light">Sing in</Button>
                            </Center>
                            </FormControl>
                        </div>
                    </Form>
                </Box>
            </Center>
        </Box>
    );

}

export default Login;