import { useContext } from 'react';
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

    const stepBarDetails = [
        { name: "flights", icon: <SvgIcon transparency={transparency} design="ufo" /> },
        { name: "passengers", icon: <SvgIcon transparency={transparency} design="people" /> },
        { name: "allocation", icon: <SvgIcon transparency={transparency} design="seat" /> },
        { name: "cargo", icon: <SvgIcon transparency={transparency} design="suitcase" /> },
        { name: "extras", icon: <SvgIcon transparency={transparency} design="gift" /> },
        { name: "payment", icon: <SvgIcon transparency={transparency} design="money" /> },
    ]

    return (
        <header className="header" data-transparency={transparency} >
            <section className="header__main">
                <button className="header__icon element--clickable" onClick={() => {}}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                {(layoutState.viewportWidth > 360) && <Link to="/" className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark}
                        alt="Comet Spaceways"
                    />
                </Link>}
                <button className="header__icon element--clickable" onClick={() => {}}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </section>
            <section className="header__secondary">
                <StepBar steps={stepBarDetails} />
            </section>
        </header>
    )
}

export default PurchaseHeader;