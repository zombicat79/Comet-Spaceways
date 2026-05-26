import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function UnprotectedComponent({ children }) {
    const { isAuth } = useContext(AuthContext);
    
    if (isAuth) return null;
    return children;
}

export default UnprotectedComponent;