import { useContext } from 'react';
import { useLocation } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';
import useHeader from './../../hooks/useHeader';
import { Link } from 'react-router';

import StepBar from '../../components/StepBar';
import SvgIcon from '../../components/SvgIcon';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

function PurchaseHeader() {
    const { layoutState } = useContext(LayoutContext);
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

    return (
        <header className="header header--purchase" data-transparency={transparency} >
            <section className="header__main">
                <Link to="/" className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark}
                        alt="Comet Spaceways"
                    />
                </Link>
            </section>
            <section className="header__secondary">
                <StepBar steps={stepBarDetails} progress={purchaseProgress} />
                <p className="header__msg">Interplanetary travel purchase in progress</p>
            </section>
        </header>
    )
}

export default PurchaseHeader;