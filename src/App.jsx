import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import Posts from './posts/posts'
import AddPost from './posts/addPost';
import MyPosts from "./posts/myPost";
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
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
