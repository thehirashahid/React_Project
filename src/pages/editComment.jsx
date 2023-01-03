import React, { useContext } from "react";
import { useFormik } from "formik";

import { CommentsContext } from "../useContext/CommentsContext";
import { UserContext } from "../useContext/UserContext";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import '../css/addPost.css'

const EditComment = () => {
    const params = useParams();
    const { id } = params || '';
    const commentId = id;
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const { comments, setComments } = useContext(CommentsContext);
    var targetCommentArray = comments.filter((curElement) => curElement.commentId === commentId);
    console.log(`targetCommentArray:  ${JSON.stringify(targetCommentArray[0])}`)
    var targetComment = targetCommentArray[0];


    var initialValues = {
        comment: targetComment.comment,
        postId: targetComment.postId,
        userEmail: targetComment.userEmail,
        userId: targetComment.userId,
        commentId: targetComment.commentId,
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            handleSubmit: (event) => event.preventDefault(),
            onSubmit: (values, action,) => {
                if (values.userEmail != user.email) alert('You are not authorized to update this commit');
                else if (values.comment != '' && values.userEmail === user.email) {
                    var updatedComments = comments.map((curElement) => {
                        if (curElement.commentId === values.commentId) {
                            return values;
                        }
                        return curElement
                    });
                    setComments(updatedComments);
                    localStorage.setItem("comments", JSON.stringify(updatedComments));
                    navigate(-1);
                }
                else alert('Add Comment');
            },
        });


    return (
        <>
            <div className="modal-post">
                <div className="modal-container-post">
                    <div className="modal-left">
                        <h1 className="modal-title">Update Comment</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-block">
                                <label htmlFor="title" className="input-label">
                                    Comment
                                </label>
                                <input
                                    type="comment"
                                    autoComplete="off"
                                    name="comment"
                                    id="comment"
                                    placeholder="Comment"
                                    value={values.comment}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.comment && touched.comment ? (
                                    <p className="form-error">{errors.comment}</p>
                                ) : null}
                            </div>
                            <div className="modal-buttons">
                                <button className="input-button" type="submit">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditComment;
