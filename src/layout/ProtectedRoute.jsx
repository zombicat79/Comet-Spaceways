
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LayoutContext } from "../contexts/LayoutContext";

// ARCHITECTURE ISSUE
import AppLayout from "./AppLayout";
import { Outlet } from "react-router";
import ScrollBlocker from './ScrollBlocker';

function ProtectedRoute() {
    const { isAuth } = useContext(AuthContext);
    const { handlePopupLaunch } = useContext(LayoutContext);

    useEffect(() => {
        if (!isAuth) {
            handlePopupLaunch({ modalClass: 'large', content: 'login' });
        }
    }, [isAuth, handlePopupLaunch])

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