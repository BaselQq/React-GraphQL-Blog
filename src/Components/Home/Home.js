import { Box, Center } from "@chakra-ui/react";
import React from "react";
import PostList from "../Post/PostList";
import Footer from "../Footer/Footer";
import GET_CATEGORIES from "../Category/List";
import CategoryList from "../Category/CategoryList";
import { useQuery } from "@apollo/client";

const Home = () => {
    const { loading, error, data } = new useQuery(GET_CATEGORIES);

    if (error) return `Error! ${error.message}`;
    if (loading) return "Loading...";

    return (
        <Box>
            <Box>
            <CategoryList data={data}/>
                {/* <Center> */}
                    {/* {Category.posts.map((Post) =>( */}

                    {/* ))} */}
                {/* </Center> */}
            </Box>
            <Center>
                <PostList passedData={data}/>
            </Center>
            <Footer/>
        </Box>
    );
}

export default Home;