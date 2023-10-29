import { useMutation } from "@apollo/client";
import React from "react";
import PUT_QUESTS from "./List/PutQuest";



function AddQuest() {
    const [ addQuestFunction, { data, loading, error }] = useMutation(PUT_QUESTS);

    if (loading) return "submitting...";
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            <form 
                method="post"
            >
                <input 
                    onChange={e => {
                    e.preventDefault();
                    addQuestFunction({variables: { title: e.target.value } });
                    e.target.value = "";
                }}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddQuest;