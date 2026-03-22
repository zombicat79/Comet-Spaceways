import { useContext } from 'react';
import { useLocation } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';
import useHeader from './../../hooks/useHeader';

import StepBar from '../../components/StepBar';
import SvgIcon from '../../components/SvgIcon';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

function PurchaseHeader() {
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);
    const { transparency } = useHeader(layoutState);
    const location = useLocation();
    
    let purchaseProgress = 0;
    switch(location.pathname) {
        case '/purchase/details':
            purchaseProgress = 1;
            break;
        case '/purchase/allocation':
            purchaseProgress = 2;
            break;
        case '/purchase/cargo':
            purchaseProgress = 3;
            break;
        case '/purchase/extras':
            purchaseProgress = 4;
            break;
        case '/purchase/checkout':
            purchaseProgress = 5;
            break;
        default:
            purchaseProgress = 0;
    }

    const stepBarDetails = [
        { id: 'tickets', name: "flights", icon: <SvgIcon transparency={transparency} design="ufo" /> },
        { id: 'details', name: "passengers", icon: <SvgIcon transparency={transparency} design="people" /> },
        { id: 'allocation', name: "allocation", icon: <SvgIcon transparency={transparency} design="seat" /> },
        { id: 'cargo', name: "cargo", icon: <SvgIcon transparency={transparency} design="suitcase" /> },
        { id: 'extras', name: "extras", icon: <SvgIcon transparency={transparency} design="gift" /> },
        { id: 'checkout', name: "payment", icon: <SvgIcon transparency={transparency} design="money" /> },
    ]

    function handlePurchaseInterruption() {
        handlePopupLaunch({ 
            modalClass: 'generic', 
            content: 'confirmation',
            props: { issue: 'You are about to quit your flight purchasing process', question: 'Are you sure to proceed?', button1: 'handleNavigation', button2: 'closeModal' } 
        });
    }

    return (
        <header className="header header--purchase" data-transparency={transparency} >
            <section className="header__main">
                {layoutState.scrollHeight <= 30 && 
                <div className="link--container" onClick={handlePurchaseInterruption}>
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark}
                        alt="Comet Spaceways"
                    />
                </div>
                }
            </section>
            <section className="header__secondary">
                {layoutState.scrollHeight <= 30 &&<p className="header__info header__info--progress">Interplanetary travel purchase in progress</p>}
                {layoutState.viewportWidth <= 600 && <p className="header__info header__info--count">STEP {purchaseProgress+1}/6</p>}
                <StepBar steps={stepBarDetails} progress={purchaseProgress} />
            </section>
        </header>
    )
}

export default PurchaseHeader;