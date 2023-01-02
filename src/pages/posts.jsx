import React, { useContext } from "react";

import { PostContext } from "../useContext/PostContext";
import { useGlobalContext } from "../useContext/context";

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
    return (<>
        <div className="posts-div">
            <h1>All Posts</h1>
            {posts.map((post) => {
                const { title, body, userId, id } = post;
                return (
                    <>
                        <div className="card" key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <div className="card-button" >
                                <p>
                                    By <span> {userId} </span> | <span></span> comments
                                </p>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    </>
    );
};

export default Posts;