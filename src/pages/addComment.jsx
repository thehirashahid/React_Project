import React, { useState, useContext, useReducer } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';

import { CommentsContext } from "../useContext/CommentsContext";
import { UserContext } from "../useContext/UserContext";

import "../css/post.css";

var initialValues = {
    body: "",
    postId: "",
    email: "",
    id: "",
    name: ""
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
            onSubmit: (values) => {
                if (user === "No User") alert('You are not authorized to post')
                else if (values.name != '' && values.body != '' && user != "No User") {
                    values.email = user.email;
                    values.id = uuidv4();
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
                                <label htmlFor="name" className="input-label">
                                    Name
                                </label>
                                <input
                                    type="name"
                                    autoComplete="off"
                                    name="name"
                                    id="name"
                                    placeholder="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (
                                    <p className="form-error">{errors.name}</p>
                                ) : null}
                            </div>
                            <div className="input-block">
                                <label htmlFor="title" className="input-label">
                                    Comment
                                </label>
                                <input
                                    type="body"
                                    autoComplete="off"
                                    name="body"
                                    id="body"
                                    placeholder="body"
                                    value={values.body}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.body && touched.body ? (
                                    <p className="form-error">{errors.body}</p>
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
