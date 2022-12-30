import React from "react";
import './header.css';

const Header = () => {
    return (
        <>
            <nav className="nav" >
                <a href="/posts" className="Posts_App" >Posts App</a>
                <ul>
                    <li className="active" > <a href="/posts" >All Posts</a></li>
                    <li><a href="/addPost" >Add Post</a></li>
                    <li> <a href="/myPosts" >My Posts</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;