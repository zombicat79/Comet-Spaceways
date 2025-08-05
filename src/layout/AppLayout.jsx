import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import ScrollBlocker from './ScrollBlocker';
import Header from './headers/Header';
import PurchaseHeader from './headers/PurchaseHeader';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Aside from './Aside';

function AppLayout() {
    const location = useLocation();
    let renderedHeader = ''
    switch(true) {
        case location.pathname.includes('purchase'):
            renderedHeader = 'purchase';
            break;
        default:
            renderedHeader = 'default';
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location]);

    return (
        <>
            <ScrollBlocker />
            {renderedHeader === 'default' && <Header />}
            {renderedHeader === 'purchase' && <PurchaseHeader />}
            <Aside side="left" />
            <Outlet />
            <Footer />
            <Subfooter />
        </>
    )
}

export default AppLayout;