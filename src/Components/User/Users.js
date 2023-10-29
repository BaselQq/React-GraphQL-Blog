import { gql, useQuery } from "@apollo/client";
import React from "react";
import GET_QUESTS from "./List/index";
import QuestsList from "./QuestsList";
import AddQuest from "./AddQuest";

const Users = () => {
    const { loading, error, data } = useQuery(GET_QUESTS);

    console.log(data);

    if (error) return `Error! ${error.message}`;
    if (loading) return "Loading...";

    return (
        <div>
            <AddQuest/>
            <QuestsList data={data}/>
        </div>
    );
}

export default Users;