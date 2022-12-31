import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Posts from './pages/posts'
import AddPost from './pages/addPost';
import MyPosts from "./pages/myPost";
import Header from "./header";
import { UserContext } from "./UserContext";

const App = () => {
  const [user, setUser] = useState('No User');

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <>
      <div className="App" >
        <UserContext.Provider value={providerUser}>
          <Router>
            <Header />
            <Routes>
              <Route path="/allposts" element={<Posts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Registration />} />
              <Route path="/addPost" element={<AddPost />} />
              <Route path="/myPosts" element={<MyPosts />} />
              <Route path="/allComments" element={<allComments />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;
