import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

import { loginSchema } from "../schemas/loginSchema";
import { UserContext } from "../useContext/UserContext";
import "../css/registration.css"

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  let usersData = JSON.parse(localStorage.getItem("users")) || [];
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        const userExists = usersData.find(user => user.email === values.email && user.password === values.password);
        if (userExists) {
          setUser(userExists);
          navigate("/allposts");
        }
        else alert("Invalid Credentials")
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </div>
                <div className="modal-buttons">
                  <button className="input-button" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <p className="sign-up">
                Don't have any account? <Link to="./">Sign Up now</Link>
              </p>
            </div>
            <div className="modal-right">
              <img
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
