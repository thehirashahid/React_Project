import React, { useContext, useEffect } from "react";
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
    console.log(`comments:  ${comments}`)
    var targetCommentArray = comments.filter((curElement) => curElement.id == commentId) || "";
    var targetComment = targetCommentArray[0];

    var initialValues = {
        body: targetComment.body,
        name: targetComment.name,
        postId: targetComment.postId,
        email: targetComment.email,
        id: targetComment.id,
    };
    console.log(`initialValues: ${initialValues}`)


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            handleSubmit: (event) => event.preventDefault(),
            onSubmit: (values, action,) => {
                if (values.email != user.email) {
                    alert('You are not authorized to update this commit');
                    navigate(-1);
                }
                else if (values.name != '' && values.body != '' && values.email === user.email) {
                    var updatedComments = comments.map((curElement) => {
                        if (curElement.id === values.id) {
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
