import { gql } from "@apollo/client"

const GET_QUESTS = gql`
query {
    categories {
        id
        title
    }
}
`

export default GET_QUESTS;