import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { CommentsContext } from "../useContext/CommentsContext";
import { UserContext } from "../useContext/UserContext";
import "../css/post.css";

const Comments = () => {
    const params = useParams();
    const { id } = params || '';
    const postId = id;

    let COMMENTAPI = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

    const { user } = useContext(UserContext);

    const { comments, setComments } = useContext(CommentsContext);

    var targetCommentArray = comments.filter((curElement) => curElement.postId === postId) || "";
    const [commentsArray, setCommentsArray] = useState(targetCommentArray);


    const fetchCommentData = async (url) => {
        try {
            const res = await fetch(url);
            const apiComments = await res.json();
            if (apiComments.length != 0) {
                apiComments.map((comment) => {
                    commentsArray.unshift(comment);
                })
                console.log(commentsArray);
                setCommentsArray(commentsArray);
                setComments(commentsArray)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCommentData(COMMENTAPI);
    }, [])


    function removeComment(commentId, userEmail) {
        if (userEmail === user.email) {
            let updatedCommentArray = commentsArray.filter((curElement) => curElement.id != commentId);
            let updatedCommentsArray = comments.filter((curElement) => curElement.id != commentId);
            setCommentsArray(updatedCommentArray);
            setComments(updatedCommentsArray);
            localStorage.setItem("comments", JSON.stringify(updatedCommentsArray));
        }
        else {
            alert("You are not authorized to delete this comment");
        }
    }

    return (<>
        <div className="posts-div">
            <Link className="addComment" to={{
                pathname: `/addComment/${id}`,
            }} >Add Comment</Link>

            {(commentsArray === undefined || commentsArray.length === 0)
                ? <>
                    <h2>No Comment Available</h2>
                </>
                : commentsArray.map((singleComment) => {
                    const { name, body, id, email, postId } = singleComment;
                    return (
                        <>
                            <div className="card" key={id}>
                                <h2>{name}</h2>
                                <p>{body}</p>
                                <div className="card-button" >
                                    <p>
                                        By <span> {email} </span>
                                    </p>
                                    <Link className="edit" to={{
                                        pathname: `/editComment/${id}`,
                                    }} >Edit</Link>
                                    <Link onClick={() => removeComment(id, email)}>Delete</Link>
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

export default Comments;