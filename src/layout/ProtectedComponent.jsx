import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedComponent({ children }) {
    const { isAuth } = useContext(AuthContext);
    
    if (!isAuth) return null;
    return children;
}

export default ProtectedComponent;