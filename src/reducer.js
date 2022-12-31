const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "GET_POSTS":
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case "REMOVE_POST":
            return {
                ...state,
                data: state.data.filter((curElement) => curElement.id != action.payload),
            }
        case "ADD_POST":
            console.log(`coming : ${action.payload.data} and state: ${state.data.length} `)
            // state.data.unshift(action.payload.data),
            //     console.log(`state after push: ${state.data.length} `)
            return {
                ...state,
                data: state.data.unshift(action.payload.data),
                // newPost: state.myPost.push(action.payload),
            }
        // case "SEARCH_POST":
        //     return {
        //         ...state,
        //         title: action.payload,
        //     }
    }
    return state;
};

export default reducer;