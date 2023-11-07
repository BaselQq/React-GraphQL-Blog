import { Button, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useQuery } from "@apollo/client";
import GET_POSTS from "./List";

function PostList({ PassedData }) {
    const { loading, error, data } = new useQuery(GET_POSTS);

    if (error) return `Error ${error.message}`;
    if (loading) return "Loading..."

    return (
        <SimpleGrid 
                spacing={12} 
                templateColumns='repeat(3, minmax(250px, 1fr))' 
                mt={7} 
                mb={9}
            >
            {PassedData ?
             PassedData.posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))
            :
            data.posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))                
        }
        </SimpleGrid>
    );
}

export default PostList;