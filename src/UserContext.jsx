import React, { useContext, useReducer, useEffect } from "react";

const UserContext = React.createContext(null);

const UserProvider = ({ userr }) => {
    console.log(`userprovider: ${userr}`)
    return (
        <UserContext.Provider value={userr}>
            {/* {children} */}
        </UserContext.Provider>
    )
}

const useGlobalUserContext = () => {
    return useContext(UserContext)
}

export { UserContext, UserProvider, useGlobalUserContext };