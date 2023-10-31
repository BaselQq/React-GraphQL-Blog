import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userActions from "../../helpers/userActions";

const Navbar = () => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate();

    function handleLogout() {
        userActions.logout();
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <Box>
            <Flex h={16} bg={"#EEDECC"}>
                <Center w="100px">
                    <Link fontWeight="" _hover={{bg: "#FEFBF5"}} bg={"EEDECC"} to="/">Home</Link>
                </Center>
                <Center w="100px">
                    <Link fontWeight="" _hover={{bg: "#FEFBF5"}} bg={"EEDECC"} to="/register">Register</Link>
                </Center>
                <Center w="100px">
                    <Link fontWeight="" _hover={{bg: "#FEFBF5"}} bg={"EEDECC"} to="/login">Sign In</Link>
                </Center>
                <Center w="100px">
                    <Link fontWeight="" _hover={{bg: "#FEFBF5"}} bg={"EEDECC"} to="/about">About</Link>
                </Center>
                <Center w="100px">
                    <Link fontWeight="" _hover={{bg: "#FEFBF5"}} bg={"EEDECC"} to="/roles">Roles (t)</Link>
                </Center>
                <Center w="100px">
                    { user && <Link fontWeight="" _hover={{bg: "#FEFBF5"}} bg={"EEDECC"} onClick={handleLogout}>Logout</Link>}
                </Center>
            </Flex>
        </Box>
    );
}

export default Navbar;