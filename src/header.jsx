import React from "react";
import { Link } from "react-router-dom";

import './css/header.css';

const Header = () => {
    return (
        <>
            <nav className="nav" >
                <a href="/posts" className="Posts_App" >Posts App</a>
                <ul>
                    <li ><Link to={"/allposts"} >All Posts</Link></li>
                    <li><Link to={"/addpost"}  >Add Post</Link></li>
                    <li><Link to={"/myposts"}  >My Posts</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;