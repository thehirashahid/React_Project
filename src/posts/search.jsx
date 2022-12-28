import React from "react";
import { useNavigate } from "react-router-dom";
import "./post.css"
// import { useGlobalContext } from "./context";


const Search = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    function logout() {
        // localStorage.clear();
        navigate('/');
    }

    // const { title, searchPost } = useGlobalContext();

    return <>
        <div className="header">
            <h1>All Posts</h1>
            <button className="logout" onClick={logout} >LOGOUT </button>
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