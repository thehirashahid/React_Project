import React, { useContext, useState } from "react";
import { useFormik } from "formik";

import { UserContext } from "../useContext/UserContext";
import { PostContext } from "../useContext/PostContext";
import { useNavigate } from "react-router-dom";
import '../css/addPost.css'

const initialValues = {
  title: "",
  body: "",
  userId: "1",
  userEmail: "",
  id: "345",

};



const AddPost = () => {
  const { post, setPost } = useContext(PostContext);
  // const [data, setData] = useState(initialValues);
  let myPosts = JSON.parse(localStorage.getItem(["myPosts"])) || [];
  let lastPostId = allPosts[(allPosts.length) - 1].id;
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      handleSubmit: (event) => event.preventDefault(),
      onSubmit: (values, action,) => {
        if (values.title != '' && values.body != '') {
          values.userId = user.name;
          values.userEmail = user.email;
          values.id = lastPostId++;
          myPosts.unshift(values);
          // setPost(myPosts);
          localStorage.setItem("myPosts", JSON.stringify(myPosts));
          localStorage.setItem("allPosts", JSON.stringify(allPosts));
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
