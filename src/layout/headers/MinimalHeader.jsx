import { useContext } from 'react';
import { useLocation } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';
import useHeader from './../../hooks/useHeader';
import { Link } from 'react-router';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

function MinimalHeader() {
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);
    const { transparency } = useHeader(layoutState);
    const location = useLocation();
    const popupHeaderPages = ['/create-account'];
    const headerLogo = <img className="header__logo" src={transparency ? LogoLight : LogoDark} alt="Comet Spaceways" />;

    function handlePurchaseInterruption() {
        handlePopupLaunch({ 
            modalClass: 'generic', 
            content: 'confirmation',
            props: { issue: 'You are about to quit your account creation process', question: 'Are you sure to proceed?', button1: 'handleNavigation', button2: 'closeModal' } 
        });
    }
    
    return (
        <header className="header header--minimal" data-transparency={transparency} >
            <section className="header__main">
                {popupHeaderPages.includes(location.pathname)
                    ? <div onClick={handlePurchaseInterruption} className="link--container">{headerLogo}</div>
                    : (layoutState.viewportWidth > 360) && <Link to="/" className="link--container">{headerLogo}</Link>
                }
            </section>
        </header>
    )
}

export default MinimalHeader;