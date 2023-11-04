import { gql } from "@apollo/client";

const GET_POSTS_BY_CATEGORY_ID = gql`
    query Posts ($categoryId: Int!){
        posts(categoryId: $categoryId) {
            id
            title
            description
            post_content
            post_photo
        }
    }
`;

export default GET_POSTS_BY_CATEGORY_ID;