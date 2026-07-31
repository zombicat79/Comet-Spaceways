import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

function useExit() {
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    function logOut() {
        navigate("/logged-out");
        setTimeout(() => setIsAuth(false), 3000);
    }

    function kickOut() {
        navigate("/account-terminated");
        setTimeout(() => setIsAuth(false), 3000);
    }

    return { logOut, kickOut }
}

export default useExit;