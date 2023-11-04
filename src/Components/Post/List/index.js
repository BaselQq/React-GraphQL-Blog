import { gql } from "@apollo/client";

const GET_POSTS = gql`
    query Posts {
        posts {
            id
            title
            description
            post_content
            post_photo
        }
    }
`;
export default GET_POSTS;