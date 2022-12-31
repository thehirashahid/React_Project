import React from "react";
import { useGlobalContext } from "../context";
import "../css/post.css";
// import { useLocation } from "react-router-dom";

const Posts = () => {
    // const location = useLocation();
    const { data, isLoading, removePost } = useGlobalContext();
    console.log('in data: ' + data)
    // if (location.state) {
    //     data.push(location.state)
    //     console.log(data);
    // }
    // // if (location.state) data.unshift(location.state);
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