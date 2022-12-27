const reducer = (state, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                data: action.payload.data,
                // arr: action.payload.arr,
            }
    }
    return state;
};

export default reducer;