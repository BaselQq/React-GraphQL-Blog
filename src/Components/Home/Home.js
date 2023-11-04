import { Box, Center } from "@chakra-ui/react";
import React from "react";
import PostList from "../Post/PostList";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <Box>
            <Center>
                <PostList/>
            </Center>
            <Footer/>
        </Box>
    );
}

export default Home;