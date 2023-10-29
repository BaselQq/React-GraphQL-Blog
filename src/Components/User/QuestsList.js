import React from "react";
import Quest from "./Quest";

function QuestsList({data}) {
    return (
        <div>
            {data.categories.map((quest) => (
                <Quest key={quest.id} quest={quest}/>
            ))}
        </div>
    )
}

export default QuestsList;