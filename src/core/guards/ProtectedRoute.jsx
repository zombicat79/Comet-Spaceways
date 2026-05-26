
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LayoutContext } from "../../contexts/LayoutContext";

// ARCHITECTURE ISSUE
import AppLayout from "../../layout/AppLayout";
import { Outlet } from "react-router";
import ScrollBlocker from './../../layout/ScrollBlocker';

function ProtectedRoute() {
    const { isAuth } = useContext(AuthContext);
    const { handlePopupLaunch } = useContext(LayoutContext);

    useEffect(() => {
        // DEPENDENCY ISSUE
        if (!isAuth) {
            handlePopupLaunch({ modalClass: 'large', content: 'login' });
        }
    }, [isAuth])

    if (!isAuth) {
        return (
            <>
                <ScrollBlocker />
                <Outlet />
            </>
        )
    }

    return <AppLayout />
}

export default ProtectedRoute;