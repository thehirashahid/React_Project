import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import Posts from './posts/posts'

const App = () => {
  return (
    <>
      <div className="App" >
        <Router>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
