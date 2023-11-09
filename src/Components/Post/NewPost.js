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

function NewPost() {
    const [ categoryId, setCategoryId ] = useState(null);
    const [ newCategoryName, setNewCategoryName ] = useState("");
    const [ htmlContent, setHtmlContent ] = useState();

    const recieveHtmlContent = (html) => {
        setHtmlContent(html);
        console.log(htmlContent);
    }

    const { loading: CategoriesLoading, error: CategoriesError, data: CategoriesData, refetch: refetchCategoriesData } = useQuery(GET_CATEGORIES);

    const recieveCategoryId = (categoryId) => {
        setCategoryId(categoryId);
    }

    const [addCategoryMutation, { loading: addCategoryLoading, error: addCategoryError, data: addCategoryData }] = useMutation(CREATE_NEW_CATEGORY_BY_ID)

    if (addCategoryLoading) return "Loading...";
    if (addCategoryError) return `Error ${addCategoryError.message}`;

    const handleInputNewCategoryName = (e) => {
        setNewCategoryName(e.target.value);
    }

    if (CategoriesLoading) return "Loading...";
    if (CategoriesError) return `Error ${CategoriesError.message}`; 

    function addNewCategory() {
        addCategoryMutation({ variables: { title: newCategoryName }});
        refetchCategoriesData();
        setNewCategoryName(null);
    }

    return (
        <Box>
            <Navbar/>
            <Form>
                <FormControl>
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
                                <Input w="400px" value={newCategoryName} onChange={handleInputNewCategoryName}/>
                            </GridItem>
                            <GridItem>
                            <Box pl={3}>
                                <Button onClick={addNewCategory} bg={"#DDA15E"} boxShadow="xl">Add</Button>
                            </Box>
                            </GridItem>
                        </Grid>        
                        <SimpleGrid
                            pl="60px"
                            pr="90px"
                            m={4}
                            spacing={1}
                            templateColumns='repeat(2, minmax(250px, 1fr))'
                        >
                            <Text>Post Title</Text>
                            <Input/>
                            <Text>Post Description</Text>
                            <Input/>
                        </SimpleGrid>
                        <Center>
                            <Box bg={"gray"} h="200px" w="800px">
                                POST PHOTO Uploader // ToDo
                            </Box>
                        </Center>
                        
                    </FormControl>
                
                <Editor recieveHtmlContent={recieveHtmlContent} />

            <Center p="40px">
                <Button                    
                >Submit</Button>
            </Center>
                </Form>
            <Footer/>
        </Box>
    );
}

export default NewPost;