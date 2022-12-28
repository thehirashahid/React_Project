import React from "react";
import { useGlobalContext } from "./context";
import Search from "./search";
import "./post.css";
// import { useLocation } from "react-router-dom";

const Posts = () => {
    // const location = useLocation();
    const { data, isLoading } = useGlobalContext();
    // if (location.state) {
    //     data.push(location.state)
    //     console.log(data);
    // }
    // // if (location.state) data.unshift(location.state);
    if (isLoading) {
        return (
            <>
                <h1>Loading......</h1>
            </>
        );
    }
    return (<>
        <Search />
        <div className="posts-div">
            {data.map((post) => {
                const { title, body, userId, id } = post;
                return (
                    <>
                        <div className="card" key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <div className="card-button" >
                                <p>
                                    By <span> {userId} </span> | <span>{id}</span> comments
                                </p>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    </>
    );
};

export default Posts;