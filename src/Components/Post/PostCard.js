import React from "react";
import { Image, Card, CardHeader } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
    const navigate = useNavigate();

    function routeToSpecificPost() {
        navigate(`/post/${post.id}`);
    }

    return (
        <Card _hover={{cursor:"pointer"}} onClick={routeToSpecificPost} key={post.id} variant={"unstyled"} maxW="sm">
            <Image
                boxShadow="lg"
                roundedTop="3rem"
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt="Post Photo"
                h="200px"
            />
            <CardHeader
                boxShadow="lg"
                h={"70px"}
                pl={"10px"}
                pt={1}
                roundedBottom="3rem"
            >
                {post.title}
            </CardHeader>
        </Card>
    )
}

export default PostCard;