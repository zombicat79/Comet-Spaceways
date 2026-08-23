import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [activeUser, setActiveUser] = useState({});

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, activeUser, setActiveUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };