import React, { useContext, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";

import { UserContext } from "../useContext/UserContext";
import { PostContext } from "../useContext/PostContext";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/addPost.css'

const EditPost = () => {
    const params = useParams();
    const { id } = params;

    const { user } = useContext(UserContext);

    const { posts, setPosts } = useContext(PostContext);
    var targetPostArray = posts.filter((curElement) => curElement.id === id);
    var targetPost = targetPostArray[0];

    var initialValues = {
        title: targetPost.title,
        body: targetPost.body,
        userId: targetPost.userId,
        userEmail: targetPost.userEmail,
        id: targetPost.id,
    };


    const navigate = useNavigate()


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            handleSubmit: (event) => event.preventDefault(),
            onSubmit: (values, action,) => {
                if (values.userEmail != user.email) alert('You are not authorized to update this commit');
                if (values.title != '' && values.body != '') {
                    var updatedPosts = posts.map((curElement) => {
                        if (curElement.id === values.id) {
                            return values;
                        }
                        return curElement
                    });
                    setPosts(updatedPosts);
                    localStorage.setItem("posts", JSON.stringify(updatedPosts));
                    navigate('/myPosts');
                }
                else alert('Add title and description')
            },
        });


    return (
        <>
            <div className="modal-post">
                <div className="modal-container-post">
                    <div className="modal-left">
                        <h1 className="modal-title">Edit Post</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-block">
                                <label htmlFor="title" className="input-label">
                                    Title
                                </label>
                                <input
                                    type="title"
                                    autoComplete="off"
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.title && touched.title ? (
                                    <p className="form-error">{errors.title}</p>
                                ) : null}
                            </div>
                            <div className="input-block">
                                <label htmlFor="body" className="input-label">
                                    Description
                                </label>
                                <input
                                    type="body"
                                    autoComplete="off"
                                    name="body"
                                    id="body"
                                    placeholder="Discription"
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

export default EditPost;
