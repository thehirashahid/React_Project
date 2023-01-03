import React, { useContext, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';

import { UserContext } from "../useContext/UserContext";
import { PostContext } from "../useContext/PostContext";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/addPost.css'

var initialValues = {
    title: "",
    body: "",
    userId: "",
    userEmail: "",
    id: uuidv4(),
};


const EditPost = () => {
    const params = useParams();
    const { id } = params;
    let all_Post_index;
    let posts_index;

    const { posts, setPosts } = useContext(PostContext);
    let allPosts = JSON.parse(localStorage.getItem(["posts"])) || [];
    var targetPostArray = posts.filter((curElement) => curElement.id === id);
    var targetPost = targetPostArray[0];

    const navigate = useNavigate()

    function findIndex() {
        initialValues = {
            title: targetPost.title,
            body: targetPost.body,
            id: targetPost.id,
            userEmail: targetPost.userEmail,
            userId: targetPost.userId
        };
        for (let i = 0; i < allPosts.length; i++) {
            console.log(`targetPost.id: ${targetPost.id} and allPosts[i].id ${allPosts[i].id}`)
            if (targetPost.id === allPosts[i].id) {
                all_Post_index = i;
                console.log('index ' + all_Post_index)
            }
        }
        for (let i = 0; i < posts.length; i++) {
            if (targetPost.id === posts[i].id) {
                posts_index = i;
                console.log(posts_index)
            }
        }
    }

    useMemo(() => {
        findIndex();
    }, []);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            handleSubmit: (event) => event.preventDefault(),
            onSubmit: (values, action,) => {
                if (values.title != '' && values.body != '') {
                    console.log(`allPosts[all_Post_index]: ${all_Post_index} and  posts[posts_index]: ${posts_index}`)
                    // allPosts[all_Post_index] = values;
                    // posts[posts_index] = values;
                    // setPosts(posts);
                    // localStorage.setItem("posts", JSON.stringify(allPosts));
                    // navigate('/myposts');
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
