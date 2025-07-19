import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import ScrollBlocker from './ScrollBlocker';
import Header from './Header';
import PurchaseHeader from './PurchaseHeader';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Aside from './Aside';

function AppLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location]);

    return (
        <>
            <ScrollBlocker />
            {location.pathname.includes('purchase')
            ? <PurchaseHeader />
            : <Header />
            }
            <Aside side="left" />
            <Outlet />
            <Footer />
            <Subfooter />
        </>
    )
}

export default AppLayout;