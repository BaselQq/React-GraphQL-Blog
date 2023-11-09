import { Box, Button, Center, Flex, FormControl, Grid, GridItem, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CategoryList from "../Category/CategoryList";
import { useMutation, useQuery } from "@apollo/client";
import GET_CATEGORIES from "../Category/List";
import { Form } from "react-router-dom";
import Editor  from "../../Components/Editor/Editor"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import CREATE_NEW_CATEGORY_BY_ID from "./CreateNewCategoryById";
import CREATE_NEW_POST from "./CreateNewPost";

function NewPost() {
    const [ categoryId, setCategoryId ] = useState(null);
    const [ newCategoryName, setNewCategoryName ] = useState("");
    const [ newPostTitle, setNewPostTitle ] = useState("");
    const [ newPostDescription, setNewPostDescription ] = useState("");
    const [ htmlContent, setHtmlContent ] = useState();

    const [addCategoryMutation, { loading: addCategoryLoading, error: addCategoryError, data: addCategoryData }] = useMutation(CREATE_NEW_CATEGORY_BY_ID)
    const [addNewPostMutation, { loading: addNewPostLoading, error: addNewPostError, data: addNewPostData }] = useMutation(CREATE_NEW_POST);

    const { loading: CategoriesLoading, error: CategoriesError, data: CategoriesData, refetch: refetchCategoriesData } = useQuery(GET_CATEGORIES);

    if (addCategoryLoading) return "Loading...";
    if (addCategoryError) return `Error ${addCategoryError.message}`;
    
    if (addNewPostLoading) return "Loading...";
    if (addNewPostError) return `Error by adding new post: ${addNewPostError.message}`;

    if (CategoriesLoading) return "Loading...";
    if (CategoriesError) return `Error by adding new Category ${CategoriesError.message}`; 

    const recieveHtmlContent = (html) => {
        setHtmlContent(html);
        console.log(htmlContent);
    }

    const recieveCategoryId = (categoryId) => {
        setCategoryId(categoryId);
    }

    const handleInputNewCategoryName = (e) => {
        setNewCategoryName(e.target.value);
    }

    const handleInputNewPostTitle = (e) => {
        setNewPostTitle(e.target.value);
    }

    const handleInputNewPostDescription = (e) => {
        setNewPostDescription(e.target.value);
    }

    function addNewCategory() {
        addCategoryMutation({ variables: { title: newCategoryName }});
        refetchCategoriesData();
        setNewCategoryName(null);
    }

    return (
        <Box>
            <Navbar/>
            <Form>
                <Text p="40px" fontSize="6xl">New Post</Text>
                    <Grid
                        pl="75px"
                        gap={3}
                        templateColumns='repeat(4, 1fr)'
                    >
                        <GridItem>
                            <CategoryList recieveCategoryId={recieveCategoryId} data={CategoriesData}/>
                        </GridItem>
                        <GridItem>
                            <Center>
                            <Text pt={2}>OR create<span style={{color: "#E9A558"}}> new</span> Category</Text>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Input boxShadow="lg" w="400px" value={newCategoryName} onChange={handleInputNewCategoryName}/>
                        </GridItem>
                        <GridItem>
                        <Box pl={3}>
                            <Button onClick={addNewCategory} bg={"#DDA15E"} boxShadow="lg">Add</Button>
                        </Box>
                        </GridItem>
                    </Grid>        
                    <SimpleGrid
                        pl="60px"
                        pr="600px"
                        m={4}
                        spacing={3}
                        templateColumns='repeat(2, minmax(250px, 1fr))'
                    >
                        <Text>Post Title</Text>
                        <Input value={newPostTitle} onChange={handleInputNewPostTitle} boxShadow="lg" w="400px"/>
                        <Text>Post Description</Text>
                        <Input value={newPostDescription} onChange={handleInputNewPostDescription} boxShadow="lg" w="400px"/>
                    </SimpleGrid>
                    <Center>
                        <Box bg={"gray"} h="200px" w="800px">
                            POST PHOTO Uploader // ToDo
                        </Box>
                    </Center>                                        
                <Editor recieveHtmlContent={recieveHtmlContent} />

            <Center p="40px">
                <Button   
                    onClick={() => addNewPostMutation({
                        variables:
                            {
                                "categoryId": parseInt(categoryId),
                                "title": newPostTitle,
                                "description": newPostDescription,
                                "postContent": htmlContent,
                            }
                    })}                 
                >Submit</Button>
            </Center>
                </Form>
            <Footer/>
        </Box>
    );
}

export default NewPost;