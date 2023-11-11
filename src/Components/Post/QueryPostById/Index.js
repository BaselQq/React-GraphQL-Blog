import { gql } from "@apollo/client";

const GET_POST_BY_ID = gql`
    query Post($id: Int!) {
        post(id: $id) {
            id
            title
            description
            post_content
        }
    }
`;

export default GET_POST_BY_ID;