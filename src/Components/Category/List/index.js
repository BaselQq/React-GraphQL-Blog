import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    query Categories {
        categories {
            id
            title
            posts {
                id
                title
                post_photo
            }
            description
            created_at
            updated_at
        }
    }
`;

export default GET_CATEGORIES;