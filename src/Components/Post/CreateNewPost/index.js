import { gql } from "@apollo/client";

const CREATE_NEW_POST = gql`
mutation CreatePost(
        $categoryId: Int,
        $title: String,
        $description: String,
        $postContent: String,
        $file: Upload
    ) {
    createPost(
        categoryId: $categoryId
        title: $title
        description: $description     
        postContent: $postContent
        postPhoto: $file
    ) {
        id
        title
        description
        post_content
    }
}
`;

export default CREATE_NEW_POST;