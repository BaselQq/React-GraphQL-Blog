import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import GET_POST_BY_ID from "./QueryPostById/Index";

function PostContent() {
    const { postId }  = useParams();
    const { loading, error, data: postData } = useQuery(GET_POST_BY_ID, {
        variables:
        {
            id: parseInt(postId)
        }
    });

    console.log(postData);

    if (loading) return "loading...";
    if (error) return `Error by quering post by id: ${error.message}`;

    return (
        <Box>
            <Navbar/>
            <Text pl="40px" pt={2} pb={2} fontSize="6xl">{postData.post.title}</Text>
            <Text pl="40px" pt={2} pb={2} fontSize="4xl">{postData.post.description}</Text>
            <Box p="40px">
                {/* {postData.post.post_content} */}
                <div dangerouslySetInnerHTML={{__html: `
                    ${postData.post.post_content}
                `}}>
                </div>
            </Box>
            <Footer/>
        </Box>
    );
}

export default PostContent;