import { useState, createContext, useEffect } from "react";
import { auth } from "../firebase.js";


const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };