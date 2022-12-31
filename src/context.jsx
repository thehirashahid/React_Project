import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    arr: [],
    // myPost: [],
    isLoading: true,
}

const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await fetch(url);
            const data = await res.json();
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

    const removePost = (post_id) => {
        dispatch({ type: "REMOVE_POST", payload: post_id });
    }

    const addPost = (post) => {
        dispatch({
            type: "ADD_POST", payload: {
                data: post,
            }
        });
    }

    // const searchPost = (searchTitle) => {
    //     dispatch({
    //         type: "SEARCH_POST",
    //         payload: searchTitle
    //     });
    // }

    useEffect(() => {
        fetchApiData(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, removePost, addPost }}>
            {children}
        </AppContext.Provider>
    )
};

// CUSTOM HOOK
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };