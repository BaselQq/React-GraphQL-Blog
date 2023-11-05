import { Box, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import PostList from "../Post/PostList";
import Footer from "../Footer/Footer";
import GET_CATEGORIES from "../Category/List";
import CategoryList from "../Category/CategoryList";
import { useQuery } from "@apollo/client";
import GET_POSTS_BY_CATEGORY_ID from "../Post/ListPostsByCategory/Index";

const Home = () => {
    const [categoryId, setCategoryId] = useState(28);
    const [limitPosts, setLimitPosts ] = useState(6);
    const { loading: CategoriesLoading, error: CategoriesError, data: CategoriesData } = new useQuery(GET_CATEGORIES);
    const { loading: PostsLoading, error: PostsError, data: PostsData } = new useQuery(GET_POSTS_BY_CATEGORY_ID, {
        variables:
        {
            "categoryId": parseInt(categoryId),
            "offset": 0,
            "limit": limitPosts
        }
    });

    if (CategoriesError) return `Error by Categories Query! ${CategoriesError.message}`;
    if (CategoriesLoading) return "Loading...";
    
    if(PostsError) return `Error by Posts Query! ${PostsError.message}`;
    if(PostsLoading) return `Loading by ...`;

    const recieveCategoryId = (categoryId) => {
        setCategoryId(categoryId);
    }

    return (
        <Box>
            <Box>
            <CategoryList recieveCategoryId={recieveCategoryId} data={CategoriesData}/>
            </Box>
            <Center>
                <PostList PassedData={PostsData}/>
            </Center>
            <Center p={12}>
                <Button onClick={() => setLimitPosts(limitPosts + 1)} bg={"#DDA15E"} boxShadow="xl">Load more</Button>
            </Center>
            <Footer/>
        </Box>
    );
}

export default Home;