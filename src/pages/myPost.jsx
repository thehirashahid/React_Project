import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { PostContext } from "../useContext/PostContext";
import { UserContext } from "../useContext/UserContext";
import { Card } from "../components/card";
import "../css/post.css";

const MyPosts = () => {
    let userPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const { posts, setPosts } = useContext(PostContext);
    const { user } = useContext(UserContext);
    var my_posts = userPosts.filter((curElement) => curElement.userEmail === user.email);

    let [myPosts, setMyPosts] = useState(my_posts);

    function removePost(id) {
        let updatedPosts = my_posts.filter((curElement) => curElement.id != id);
        let updatedPostss = posts.filter((curElement) => curElement.id != id);
        setMyPosts(updatedPosts)
        setPosts(updatedPostss);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }

    return (<>
        <div className="posts-div">
            <h1>My Posts</h1>
            {(myPosts === undefined || myPosts.length === 0)
                ? <h2>No Post Available</h2>
                : myPosts.map((post) => {
                    const { title, body, userId, id } = post;
                    return (
                        <Card
                            title={title}
                            body={body}
                            userId={userId}
                            editButton={true}
                            editButtonLink={`/editPost/${id}`}
                            id={id}
                            path={`/Comments/${id}`}
                            button={'Comments'}
                            removeBtn={true}
                            removeBtnLink={() => removePost(id)}
                        />
                    );
                    {/* return (
                        <>
                            <div className="card" key={id}>
                                <h2>{title}</h2>
                                <p>{body}</p>
                                <div className="card-button" >
                                    <p>By <span> {userId} </span> | <Link to={`/Comments/${id}`} >Comments</Link>
                                    </p>
                                    <Link className="edit" to={`/editPost/${id}`} >Edit</Link>
                                    <Link onClick={() => removePost(id)}  >Remove</Link>
                                </div>
                            </div>
                        </>
                    ); */}
                }
                )}
        </div>
    </>
    );
};

export default MyPosts;