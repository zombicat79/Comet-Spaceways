import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import ScrollBlocker from './ScrollBlocker';
import MinimalHeader from './headers/MinimalHeader';

function MinAppLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location]);

    return (
        <>
            <ScrollBlocker />
            <MinimalHeader />
            <Outlet />
        </>
    )
}

export default MinAppLayout;