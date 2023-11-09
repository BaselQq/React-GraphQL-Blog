import { gql } from "@apollo/client";

const CREATE_NEW_CATEGORY_BY_ID = gql`
mutation CreateCategory($title: String!){
    createCategory(title: $title) {
        id
        title
        description
        created_at
        updated_at
    }
}

`;

export default CREATE_NEW_CATEGORY_BY_ID;