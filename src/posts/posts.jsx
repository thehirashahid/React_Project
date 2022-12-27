import React from "react";
import { useGlobalContext } from "./context";
import "./post.css";

const Posts = () => {
    const { data, isLoading } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <h1>Loading......</h1>
            </>
        );
    }
    return (<>
        <div className="posts-div">
            {data.map((post) => {
                const { title, body, userId, id } = post;
                return (
                    <>
                        <div className="card" key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <p>
                                By <span> {userId} </span> | <span>{id}</span> comments
                            </p>
                            <div className="card-button" >
                                {/* <a href="#" onClick={removePost}>Remove</a> */}
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