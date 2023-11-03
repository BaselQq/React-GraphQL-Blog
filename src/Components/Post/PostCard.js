import React from "react";
import { Image, Card, CardHeader } from "@chakra-ui/react";


function PostCard() {
    return (
        <Card variant={"unstyled"} maxW="sm">
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
                pl={"15px"}
                roundedBottom="3rem"
            >
                POST TITLE IN CAPITAL LETTERS
                POST TITLE IN CAPITAL LETTERS
                POST TITLE IN CAPITAL LETTERS
            </CardHeader>
        </Card>
    )
}

export default PostCard;