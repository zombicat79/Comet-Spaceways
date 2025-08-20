import { useEffect, useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';
import { Outlet, useLocation } from 'react-router';

import ScrollBlocker from './ScrollBlocker';
import Header from './headers/Header';
import PurchaseHeader from './headers/PurchaseHeader';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Aside from './Aside';
import FloatingButton from '../components/FloatingButton';
import ShoppingCart from '../components/ShoppingCart';

function AppLayout() {
    const { dispatch } = useContext(LayoutContext);
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

    function openAside() {
        dispatch({ type: 'toggle/scroll' });
        dispatch({ type: 'toggle/aside', payload: {
            side: 'right',
            shown: true,
            content: <ShoppingCart /> 
        }})
    }

    return (
        <>
            <ScrollBlocker />
            {renderedHeader === 'default' && <Header />}
            {renderedHeader === 'purchase' && <PurchaseHeader />}
            <Aside side="left" />
            <Outlet />
            <Aside side="right" />
            <Footer />
            <Subfooter />
            {renderedHeader === 'purchase' && 
                <FloatingButton position="bottom-right" action={openAside} icon="shopping-cart" bgColor="green" outlineColor="#121212" 
            />}
        </>
    )
}

export default AppLayout;