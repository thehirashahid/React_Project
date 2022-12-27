import React from "react";
import { useGlobalContext } from "./context";
import Search from "./search";
import "./post.css";

const Posts = () => {
    const { data, isLoading, removePost } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1>Loading......</h1>
            </>
        );
    }
    return (<>
        <Search />
        <div className="posts-div">
            {data.map((post) => {
                const { title, body, userId, id } = post;
                return (
                    <>
                        <div className="card" key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <div className="card-button" >
                                <p>
                                    By <span> {userId} </span> | <span>{id}</span> comments
                                </p>
                                <a href="#" onClick={() => removePost(id)}>Remove</a>
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