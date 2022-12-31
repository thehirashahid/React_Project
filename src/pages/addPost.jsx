import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";
import '../css/addPost.css'

const initialValues = {
  title: "",
  body: "",
  userId: "1",
  id: "345"
};

const AddPost = () => {
  const { addPost } = useGlobalContext();

  const getPosts = localStorage.getItem("post");
  const myPosts = JSON.parse(getPosts)
  console.log(myPosts)
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    console.log(posts)
    localStorage.setItem("post", JSON.stringify(posts));
    navigate("/myPosts")
  }, [posts]);

  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      handleSubmit: (event) => event.preventDefault(),
      onSubmit: (values, action,) => {

        if (values.title != '') {
          // setPosts([...posts, values]);
          addPost(values);
        }
        else alert('Add title and description')

        // const prevPosts = localStorage.getItem("post")
        // prevPosts.unshift(values)
        // console.log(`prevPosts: ${prevPosts}`)


        navigate("/myPosts", { state: { values: values } })
        // action.resetForm();
      },
    });
  // console.log(
  //   "🚀 ~ file: Login.jsx ~ line 25 ~ Login ~ errors",
  //   errors
  // );

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
