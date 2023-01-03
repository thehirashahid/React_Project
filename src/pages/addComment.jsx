import React, { useState, useContext, useReducer } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';

import { CommentsContext } from "../useContext/CommentsContext";
import { UserContext } from "../useContext/UserContext";

import "../css/post.css";
import Comments from "./comments";

var initialValues = {
    comment: "",
    postId: "",
    userEmail: "",
    userId: "",
    commentId: "",
};


const AddComment = () => {
    const params = useParams();
    const { id } = params || '';

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const { comments, setComments } = useContext(CommentsContext);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            onSubmit: (values, action,) => {
                if (user === "No User") alert('You are not authorized to post')
                else if (values.comment != '' && user != "No User") {
                    values.userId = user.name;
                    values.userEmail = user.email;
                    values.commentId = uuidv4();
                    values.postId = id;
                    comments.unshift(values);
                    setComments(comments)
                    localStorage.setItem("comments", JSON.stringify(comments));
                    navigate(`/comments/${id}`)
                }
                else alert('Add Commment')
            },
        });

    return (
        <>
            <div className="modal-post">
                <div className="modal-container-post">
                    <div className="modal-left">
                        <h1 className="modal-title">Add New Comment</h1>
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
                                    Publish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddComment;
