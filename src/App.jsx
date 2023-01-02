import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Posts from './pages/posts'
import AddPost from './pages/addPost';
import EditPost from './pages/editPost';
import MyPosts from "./pages/myPost";
import Header from "./header";

import { UserContext } from "./useContext/UserContext";
import { PostContext } from "./useContext/PostContext";
import { AppProvider } from "./useContext/context";

const App = () => {
  const [user, setUser] = useState('No User');
  const [posts, setPosts] = useState([]);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const providerPost = useMemo(() => ({ posts, setPosts }), [posts, setPosts]);

  return (
    <>
      <div className="App" >
        <UserContext.Provider value={providerUser}>
          <PostContext.Provider value={providerPost}>
            <AppProvider>
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<Registration />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/allposts" element={<Posts />} />
                  <Route path="/addPost" element={<AddPost />} />
                  <Route path="/editPost/:id" element={<EditPost />} />
                  <Route path="/myPosts/" element={<MyPosts />} />
                  <Route path="/allComments" element={<allComments />} />
                </Routes>
              </Router>
            </AppProvider>
          </PostContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;
