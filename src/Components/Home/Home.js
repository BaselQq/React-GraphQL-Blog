import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PostCard from "../Post/PostCard";

const Home = () => {
    return (
        <Box>
            <SimpleGrid spacing={7} templateColumns='repeat(3, minmax(250px, 1fr))' mt={7} ml={28} mb={9}>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </SimpleGrid>
        </Box>
    );
}

export default Home;