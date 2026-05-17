import { useEffect, useLayoutEffect, useContext, useRef } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';
import { CartContext } from '../contexts/CartContext';
import { Outlet, useLocation, useNavigate } from 'react-router';

import ScrollBlocker from './ScrollBlocker';
import Header from './headers/Header';
import PurchaseHeader from './headers/PurchaseHeader';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Aside from './Aside';
import FloatingButton from '../components/FloatingButton';
import ShoppingCart from '../components/shopping/ShoppingCart';

function AppLayout() {
    const { dispatch, resetPageScroll, layoutState } = useContext(LayoutContext);
    const { cartState } = useContext(CartContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const floatingBtn1 = useRef(null);
    const floatingBtn2 = useRef(null);
    const floatingBtn3 = useRef(null);
    const floatingBtn4 = useRef(null);

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

    useLayoutEffect(() => {
        // Piling up logic for managing concurrent floating buttons on screen
        const floatBtnsAmount = [
            floatingBtn1.current, floatingBtn2.current, 
            floatingBtn3.current, floatingBtn4.current
        ].filter(el => Boolean(el));
        floatBtnsAmount.forEach((btn, index) => {
            let position;
            if (Array.from(btn.classList).includes('btn--floating--bottom-right')) {
                position = index > 0 ? (btn.offsetHeight * index) + (10 * index) + 30 : 30;
            }
            btn.style.bottom = `${position}px`;
        });
    })

    function openAside() {
        dispatch({ type: 'toggle/scroll' });
        dispatch({ type: 'toggle/aside', payload: {
            side: 'right',
            shown: true,
            content: <ShoppingCart /> 
        }});
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
            
            {/* Floating button for deep scrolling offset */}
            {layoutState.scrollHeight > window.innerHeight && 
                <FloatingButton 
                    ref={floatingBtn1}
                    position="bottom-right" 
                    action={resetPageScroll} 
                    icon="db-arrow-up" 
                    bgColor="green" 
                    outlineColor="#121212"
                    opacity="full"
                />
            }

            {/* Floating button for purchase process pages */}
            {renderedHeader === 'purchase' && 
                <FloatingButton 
                    ref={floatingBtn2}
                    position="bottom-right" 
                    action={openAside} 
                    icon="shopping-cart" 
                    bgColor="green" 
                    outlineColor="#121212"
                    opacity={cartState.outboundFlight || cartState.inboundFlight ? "full" : "dimmed"} 
                />
            }

            {/* Floating button for destination detail pages */}
            {/\/[A-Z]{3}$/.test(location.pathname) && 
                <FloatingButton 
                    ref={floatingBtn3}    
                    position="bottom-right" 
                    action={() => navigate("/destinations")} 
                    icon="planet" 
                    bgColor="green" 
                    outlineColor="#121212"
                    opacity="full" 
            />}

            {/* Floating button for nhe detail pages */}
            {/\/[\w-]+(ians|oids|grays|little-men|phics)$/.test(location.pathname) && 
                <FloatingButton
                    ref={floatingBtn4} 
                    position="bottom-right" 
                    action={() => navigate("/nhes")} 
                    icon="nhe" 
                    bgColor="green" 
                    outlineColor="#121212"
                    opacity="full" 
            />}
        </>
    )
}

export default AppLayout;