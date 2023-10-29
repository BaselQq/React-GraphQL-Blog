import { gql } from "@apollo/client";

const PUT_QUESTS = gql`
    mutation CreateCategory($title: String!) {
        createCategory(title: $title) {
            id
            title
        }
    }
`

export default PUT_QUESTS;