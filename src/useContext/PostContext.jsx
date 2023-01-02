import React, { useContext } from "react";

const PostContext = React.createContext(null);

const PostProvider = ({ post }) => {
    console.log(`Postprovider: ${post}`)
    return (
        <PostContext.Provider value={post}>

        </PostContext.Provider>
    )
}

const useGlobalPostContext = () => {
    return useContext(PostContext)
}

export { PostContext, PostProvider, useGlobalPostContext };