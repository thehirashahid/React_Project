import React, { useContext } from "react";
import { Link } from "react-router-dom";


import { PostContext } from "../useContext/PostContext";
import { useGlobalContext } from "../useContext/context";

import { Card } from "../components/card";
import "../css/post.css";

const Posts = () => {
    const { posts } = useContext(PostContext);
    const { isLoading } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1>Loading......</h1>
            </>
        );
    }
    return (
        <>
            <div className="posts-div">
                <h1>All Posts</h1>
                {posts.map((post) => {
                    const { title, body, userId, id } = post;
                    return <Card
                        title={title}
                        body={body}
                        userId={userId}
                        id={id}
                        path={`/comments/${id}`}
                        button={'Comments'} />
                })}
            </div>
        </>
    );
};

export default Posts;