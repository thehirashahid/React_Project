import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PostContext } from "../useContext/PostContext";
import { UserContext } from "../useContext/UserContext";
import "../css/post.css";

const MyPosts = () => {
    let userPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const { user } = useContext(UserContext);
    var my_posts = userPosts.filter((curElement) => curElement.userEmail === user.email);
    const navigate = useNavigate();

    let [myPosts, setMyPosts] = useState(my_posts);

    function removePost(id) {
        let updatedPosts = userPosts.filter((curElement) => curElement.id != id);
        setMyPosts(updatedPosts)
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }

    function editPost(id, title, body) {
        navigate('/addPost', { state: { id, title, body } })
    }

    return (<>
        <div className="posts-div">
            {(myPosts === undefined || myPosts.length === 0)
                ? <h2>No Post Available</h2>
                : myPosts.map((post) => {
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
                                    <a className="edit" href="#" onClick={() => editPost(id, title, body)}>Edit</a>
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