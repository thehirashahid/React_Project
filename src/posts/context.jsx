import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    arr: [],
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
            console.log(data);
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

    // const removePost = () => {
    //     dispatch;
    // }

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