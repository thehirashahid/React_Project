import React, { useContext } from "react";

const CommentsContext = React.createContext(null);

const CommentsProvider = ({ post }) => {
    return (
        <CommentsContext.Provider value={post}>

        </CommentsContext.Provider>
    )
}

const useGlobalCommentsContext = () => {
    return useContext(CommentsContext)
}

export { CommentsContext, CommentsProvider, useGlobalCommentsContext };