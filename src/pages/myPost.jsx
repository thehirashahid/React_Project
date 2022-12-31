import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../posts/context";
import "../css/post.css";

const MyPosts = () => {
    const navigate = useNavigate();
    let userPosts = JSON.parse(localStorage.getItem("posts")) || [];
    let [posts, setPosts] = useState(userPosts);

    function removePost(id) {
        var updatedPosts = userPosts.filter((curElement) => curElement.id != id);
        setPosts(updatedPosts)
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }

    function editPost(id, title, body) {
        // navigate('/addPost')
    }

    return (<>
        <div className="posts-div">
            {(posts === undefined || posts.length === 0)
                ? <h2>No Post Available</h2>
                : posts.map((post) => {
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