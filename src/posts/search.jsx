import React from "react";

import "./post.css"
// import { useGlobalContext } from "./context";


const Search = () => {
    // const { title, searchPost } = useGlobalContext();

    return <>
        <div>
            <h1>All Posts</h1>
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