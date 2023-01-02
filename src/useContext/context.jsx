import React, { useContext, useReducer, useEffect } from "react";

import { PostContext } from "../useContext/PostContext";
import { AllPostContext } from "../useContext/AllPostContext";
import reducer from "./reducer";

let API = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    arr: [],
    isLoading: true,
}

const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {
    const { allPost, setAllPost } = useContext(AllPostContext);

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        let allPosts = JSON.parse(localStorage.getItem("posts")) || [];
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (allPosts.length != 0) {
                allPosts.map((post) => {
                    data.unshift(post);
                })
            }
            setAllPost(data);
            dispatch({
                type: "GET_POSTS",
                payload: {
                    data: data,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApiData(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
};

// CUSTOM HOOK
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };