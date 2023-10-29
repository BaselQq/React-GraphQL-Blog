import { gql } from "@apollo/client";

const GET_ROLES = gql`
query UserRoles {
    userRoles {
        name
        photo_name
        created_at
        updated_at
        id
    }
}
`;

export default GET_ROLES;