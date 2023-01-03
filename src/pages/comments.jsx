import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { CommentsContext } from "../useContext/CommentsContext";
import { UserContext } from "../useContext/UserContext";
import "../css/post.css";

const Comments = () => {
    const params = useParams();
    const { id } = params || '';
    const { user } = useContext(UserContext);

    const { comments, setComments } = useContext(CommentsContext);

    var targetCommentArray = comments.filter((curElement) => curElement.postId === id);
    const [commentsArray, setCommentsArray] = useState(targetCommentArray);

    function removeComment(commentId, userEmail) {
        if (userEmail === user.email) {
            console.log(`userEmail: ${userEmail} and user.email: ${user.email}`)
            // let updatedCommentArray = targetCommentArray.filter((curElement) => curElement.commentId != commentId);
            // let updatedCommentsArray = comments.filter((curElement) => curElement.commentId != commentId);
            // setCommentsArray(updatedCommentArray);
            // setComments(updatedCommentsArray);
            // localStorage.setItem("comments", JSON.stringify(updatedCommentsArray));
        }
        else {
            alert("You are not authorized to delete this comment");
        }
    }

    return (<>
        <div className="posts-div">
            {(commentsArray === undefined || commentsArray.length === 0)
                ? <>
                    <h2>No Comment Available</h2>
                    <Link className="edit" to={{
                        pathname: `/addComment/${id}`,
                    }} >Add Comment</Link>
                </>
                : commentsArray.map((singleComment) => {
                    const { comment, userId, commentId, userEmail } = singleComment;
                    return (
                        <>
                            <div className="card" key={commentId}>
                                <h2>{comment}</h2>
                                <div className="card-button" >
                                    <p>
                                        By <span> {userId} </span>
                                    </p>
                                    {/* <Link className="edit" to={{
                                        pathname: `/editPost/${id}`,
                                        state: singleComment
                                    }} >Edit</Link> */}
                                    <Link onClick={() => removeComment(commentId, userEmail)}>Delete</Link>
                                </div>
                            </div>
                            <Link className="edit" to={{
                                pathname: `/addComment/${id}`,
                            }} >Add Comment</Link>
                        </>
                    );
                }

                )}
        </div>
    </>
    );
};

export default Comments;