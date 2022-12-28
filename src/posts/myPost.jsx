import React, { useEffect, useState } from "react";
import Search from "./search";
import "./post.css";

const MyPosts = () => {
    const getPosts = localStorage.getItem("post");
    const myPosts = JSON.parse(getPosts)
    function removePost(id) {
        myPosts.filter((curElement) => {
            curElement.id != id
        })
        console.log(myPosts)
    }
    useEffect(() => {
        console.log(myPosts)
    }, [myPosts]);

    return (<>
        <Search />
        <div className="posts-div">
            {(myPosts === undefined || myPosts == null)
                ? <h2>No Post Available</h2>
                : myPosts.map((post) => {
                    const { title, body, userId, id } = post;
                    console.log(post.title)
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
                }
                )}
        </div>
    </>
    );
};

export default MyPosts;