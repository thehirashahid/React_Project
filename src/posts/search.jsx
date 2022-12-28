import React from "react";
import { useNavigate } from "react-router-dom";
import "./post.css"


const Search = () => {
    const navigate = useNavigate();
    function logout() {
        navigate('/');
    }
    function addPost() {
        navigate('/addPost');
    }
    function myPost() {
        navigate('/myPosts');
    }

    return <>
        <div className="header">
            <h1>All Posts</h1>
            <button className="logout" onClick={addPost} >Add Post</button>
            <button className="logout" onClick={myPost} >My Posts</button>
            <button className="logout" onClick={logout} >Logout </button>
            {/* <form>
                <div>
                    <input type="text" placeholder="Search Here"
                        value={title}
                        onChange={(e) => searchPost(e.target.value)}
                    />
                </div>
            </form> */}
        </div>
    </>

};

export default Search;