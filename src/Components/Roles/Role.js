import React from "react";

function Role({UserRole}) {
    // console.log(UserRole);

    return (
        <div>
            <h2>{UserRole.name}</h2>
        </div>
    );
}

export default Role;