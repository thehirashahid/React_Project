import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Posts from './pages/posts'
import AddPost from './pages/addPost';
import EditPost from './pages/editPost';
import MyPosts from "./pages/myPost";
import Comments from './pages/comments';
import AddComment from './pages/addComment';
import EditComment from './pages/editComment';
import Header from "./header";
import { UserContext } from "./useContext/UserContext";
import { PostContext } from "./useContext/PostContext";
import { CommentsContext } from "./useContext/CommentsContext";
import { AppProvider } from "./useContext/context";

const App = () => {
  const [user, setUser] = useState('No User');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const providerPost = useMemo(() => ({ posts, setPosts }), [posts, setPosts]);
  const providerComments = useMemo(() => ({ comments, setComments }), [comments, setComments]);

  return (
    <>
      <div className="App" >
        <UserContext.Provider value={providerUser}>
          <PostContext.Provider value={providerPost}>
            <CommentsContext.Provider value={providerComments}>
              <AppProvider>
                <Router>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/allposts" element={<Posts />} />
                    <Route path="/addPost" element={<AddPost />} />
                    <Route path="/editPost/:id" element={<EditPost />} />
                    <Route path="/myPosts" element={<MyPosts />} />
                    <Route path="/Comments/:id" element={<Comments />} />
                    <Route path="/AddComment/:id" element={<AddComment />} />
                    <Route path="/editComment/:id" element={<EditComment />} />
                  </Routes>
                </Router>
              </AppProvider>
            </CommentsContext.Provider>
          </PostContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;
