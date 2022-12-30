import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Posts from './pages/posts'
import AddPost from './pages/addPost';
import MyPosts from "./pages/myPost";
import allComments from "./comments/allComments"
import Header from "./header";
// import Header from './header';

const App = () => {
  return (
    <>
      <div className="App" >
        <Router>
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Registration />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="/myPosts" element={<MyPosts />} />
            <Route path="/allComments" element={<allComments />} />
          </Routes>
        </Router>

      </div>
    </>
  );
};

export default App;
