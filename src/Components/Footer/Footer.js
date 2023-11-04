import { Box, Center, Text, Flex,  Button } from "@chakra-ui/react";
import React from "react";

function Footer() {
    return (
        <Box>
            <Flex bg={"#FEFBF5"} h={"300px"}>
                <Box w='218px'>
                </Box>
                <Box>
                    <Center w='218px' p={4}>
                        <Text>WHO OWN THIS SITE?</Text>
                    </Center>
                    <Center>
                        <Text>Basel Qarbun</Text>
                    </Center>
                </Box>
                <Box>
                    <Center w='218px' p={4}>
                        <Text>DESIGNED BY</Text>
                    </Center>
                    <Center>
                        <Text>Basel Qarbun</Text>
                    </Center>
                </Box>
                <Center>
                    <Text as={"del"}>Back to top</Text>
                </Center>
            </Flex>
        </Box>
    );
}

export default Footer;