import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const Posts = () => {
    const { data } = useGlobalContext();
    // console.log('there: ' + data[0].title);
    return (<>
        {data.map((post) => {
            const { title, body } = post;
            return (
                <>
                    <div className="card">
                        <h2></h2>
                    </div>
                </>
            );
        })}
    </>
    );
};

export default Posts;