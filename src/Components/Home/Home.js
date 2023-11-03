import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PostCard from "../Post/PostCard";

const Home = () => {
    return (
        <Box>
            <Center>
                <SimpleGrid 
                        spacing={7} 
                        templateColumns='repeat(3, minmax(250px, 1fr))' 
                        mt={7} 
                        mb={9}
                    >
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </SimpleGrid>
            </Center>
        </Box>
    );
}

export default Home;