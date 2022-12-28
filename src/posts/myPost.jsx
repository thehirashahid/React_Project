import React from "react";
import Search from "./search";
import "./post.css";
import { useLocation } from "react-router-dom";

const MyPosts = () => {
    let arr = [];
    const getPosts = localStorage.getItem("post");
    const myPosts = JSON.parse(getPosts)
    arr.push(myPosts)
    function removePost(id) {
        console.log(`IN REMOVE + ${id} and array: ${arr}`)
        arr = arr.filter((curElement) => {
            curElement.id != id
        })

    }
    const location = useLocation();
    console.log(`location.state: ${location.state}`)
    let data = [];
    // const { data, isLoading, removePost } = useGlobalContext();
    if (location.state) {
        console.log('data before push' + data);
        data.push(location.state.values)
        console.log('data before push' + data);
    }
    return (<>
        <Search />
        <div className="posts-div">
            {arr[0] === ''
                ? <h2>No Post Available</h2>
                : arr.map((post) => {
                    const { title, body, userId, id } = post;
                    console.log(post)
                    return (
                        <>
                            <div className="card" key={id}>
                                <h2>{title}</h2>
                                <p>{body}</p>
                                <div className="card-button" >
                                    <p>
                                        By <span> {userId} </span> | <span>{id}</span> comments
                                    </p>
                                    <a href="#" onClick={() => removePost(id)}>Remove</a>
                                </div>
                            </div>
                        </>
                    );
                }
                )}
        </div>
    </>
    );
};

export default MyPosts;