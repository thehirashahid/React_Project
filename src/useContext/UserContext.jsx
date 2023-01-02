import React, { useContext } from "react";

const UserContext = React.createContext(null);

const UserProvider = ({ userr }) => {
    console.log(`userprovider: ${userr}`)
    return (
        <UserContext.Provider value={userr}>

        </UserContext.Provider>
    )
}

const useGlobalUserContext = () => {
    return useContext(UserContext)
}

export { UserContext, UserProvider, useGlobalUserContext };