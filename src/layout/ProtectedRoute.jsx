
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LayoutContext } from "../contexts/LayoutContext";

// ARCHITECTURE ISSUE
import AppLayout from "./AppLayout";
import MinAppLayout from "./MinAppLayout";
import ScrollBlocker from './ScrollBlocker';
import MinimalHeader from "./headers/MinimalHeader";
import RestrictedPage from "../pages/RestrictedPage";

function ProtectedRoute() {
    const { isAuth } = useContext(AuthContext);
    const { handlePopupLaunch } = useContext(LayoutContext);

    function openLogin() {
        handlePopupLaunch({ modalClass: 'large', content: 'login' });
    }

    useEffect(() => {
        if (!isAuth) {
            openLogin();
        }
    }, [isAuth])

    if (!isAuth) {
        return (
            <>
                <ScrollBlocker />
                <MinimalHeader />
                <RestrictedPage onLogin={openLogin} />
            </>
        )
    }

    return <MinAppLayout />
}

export default ProtectedRoute;