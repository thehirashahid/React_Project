import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';

import { UserContext } from "../useContext/UserContext";
import { PostContext } from "../useContext/PostContext";
import { useNavigate } from "react-router-dom";
import '../css/addPost.css'

var initialValues = {
  title: "",
  body: "",
  userId: "",
  userEmail: "",
  id: "",
};


const AddPost = () => {

  const { posts, setPosts } = useContext(PostContext);
  let allPosts = JSON.parse(localStorage.getItem(["posts"])) || [];
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      handleSubmit: (event) => event.preventDefault(),
      onSubmit: (values, action,) => {
        if (user === "No User") alert('You are not authorized to post')
        else if (values.title != '' && values.body != '' && user != "No User") {
          values.userId = user.name;
          values.userEmail = user.email;
          values.id = uuidv4();
          allPosts.unshift(values);
          posts.unshift(values);
          setPosts(posts);
          localStorage.setItem("posts", JSON.stringify(allPosts));
          navigate('/myposts')
        }
        else alert('Add title and description')
      },
    });


  return (
    <>
      <div className="modal-post">
        <div className="modal-container-post">
          <div className="modal-left">
            <h1 className="modal-title">Add Post</h1>
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

export default AddPost;
