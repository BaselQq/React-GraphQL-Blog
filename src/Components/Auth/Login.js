import React, { useState } from "react";
import axios from "axios";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Center, FormControl, Input } from "@chakra-ui/react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password
            });

            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setUser(response.data.user);
                navigate("/");
            }
        } catch(err) {
            // setError('Login Credentials missing');
        }
    }

    return (
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
    );

}

export default Login;