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
                // arr: action.payload.arr,
            }
    }
    return state;
};

export default reducer;