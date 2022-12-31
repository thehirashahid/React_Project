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
  let usersPost = JSON.parse(localStorage.getItem("posts")) || [];
  const navigate = useNavigate();


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      handleSubmit: (event) => event.preventDefault(),
      onSubmit: (values, action,) => {
        if (values.title != '' && values.body != '') {
          usersPost.push(values);
          localStorage.setItem("posts", JSON.stringify(usersPost));
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
