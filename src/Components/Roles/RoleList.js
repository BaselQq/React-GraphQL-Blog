import React from "react";
import Role from "./Role";
import { useQuery } from "@apollo/client";
import GET_ROLES from "./List";

function RoleList() {
    const { loading, error, data } = new useQuery(GET_ROLES);

    if (error) return `Error! ${error.message}`;
    if (loading) return "Loading...";

    return (
        <div>
            {data.userRoles.map((UserRole) => (
                <Role key={UserRole.id} UserRole={UserRole}/>
            ))}
        </div>
    );
}

export default RoleList;