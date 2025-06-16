import { useState, useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

import NavBar from './../components/NavBar';
import NavMenu from './../components/NavMenu';
import WorkInProgress from '../components/infopieces/WorkInProgress';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';
import LogoMinLight from '/logos/ctsw-logo_light_badge.png';
import LogoMinDark from '/logos/ctsw-logo_dark_badge.png';

const headerLinks = {
    topLeft: [
        /* { id: 1, text: 'book', action: 'navigate', path: '', decoration: null },
        { id: 2, text: 'search a voyage', action: 'navigate', path: '', decoration: null },
        { id: 3, text: 'launch status', action: 'navigate', path: '', decoration: null } */
        { id: 1, text: 'book', action: 'popup', payload: <WorkInProgress />, decoration: null },
        { id: 2, text: 'search a voyage', action: 'popup', payload: <WorkInProgress />, decoration: null },
        { id: 3, text: 'launch status', action: 'popup', payload: <WorkInProgress />, decoration: null }
    ],
    topRight: [
        /* { id: 4, text: 'promos', action: 'navigate', path: '', decoration: null },
        { id: 5, text: 'cosmic club', action: 'navigate', path: '', decoration: null }, */
        { id: 4, text: 'promos', action: 'popup', payload: <WorkInProgress />, decoration: null },
        { id: 5, text: 'cosmic club', action: 'popup', payload:<WorkInProgress />, decoration: null },
        { id: 6, text: 'info', action: 'expand', path: null, decoration: null },
        { id: 7, text: 'log in', action: 'popup', payload: <WorkInProgress />, decoration: 'primary' }
    ],
    bottomLeft: [
        /* { id: 8, text: 'Help centre', action: 'navigate', path: '', decoration: 'underline' },
        { id: 9, text: 'Fares', action: 'navigate', path: '', decoration: 'underline' },
        { id: 10, text: 'Cargo', action: 'navigate', path: '', decoration: 'underline' },
        { id: 11, text: 'Seats & cabins', action: 'navigate', path: '', decoration: 'underline' },
        { id: 12, text: 'Onboard experience', action: 'navigate', path: '', decoration: 'underline' },
        { id: 13, text: 'Destinations', action: 'navigate', path: '', decoration: 'underline' } */
        { id: 8, text: 'Help centre', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 9, text: 'Fares', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 10, text: 'Cargo', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 11, text: 'Seats & cabins', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 12, text: 'Onboard experience', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 13, text: 'Destinations', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' }
    ],
    bottomRight: [
        /* { id: 14, text: 'Check-in info', action: 'navigate', path: '', decoration: 'underline' },
        { id: 15, text: 'Special assistance', action: 'navigate', path: '', decoration: 'underline' },
        { id: 16, text: 'Travel docs', action: 'navigate', path: '', decoration: 'underline' },
        { id: 17, text: 'Additional services', action: 'navigate', path: '', decoration: 'underline' },
        { id: 18, text: 'Flexibility services', action: 'navigate', path: '', decoration: 'underline' },
        { id: 19, text: 'Traveling with NHEs', action: 'navigate', path: '', decoration: 'underline' },
        { id: 20, text: 'Spaceport transfer', action: 'navigate', path: '', decoration: 'underline' },
        { id: 21, text: 'Security', action: 'navigate', path: '', decoration: 'underline' }, */
        { id: 14, text: 'Check-in info', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 15, text: 'Special assistance', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 16, text: 'Travel docs', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 17, text: 'Additional services', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 18, text: 'Flexibility services', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 19, text: 'Traveling with NHEs', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 20, text: 'Spaceport transfer', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 21, text: 'Security', action: 'popup', payload: <WorkInProgress />, decoration: 'underline' },
    ]
}

function Header() {
    const [transparency, setTransparency] = useState(true);
    const [expansion, setExpansion] = useState(false);
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);

    function handleResizing() {
        if (transparency) {
            setTransparency((current) => !current);
            setExpansion((current) => !current);
        }
        if (!transparency) setExpansion((current) => !current);
    }

    return (
        <header className="header" data-transparency={transparency} >
            <section className="header__main">
                <button className="header__icon element--clickable">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.topLeft}
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                {(layoutState.viewportWidth > 360) && <a className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark} 
                    />
                </a>}
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.topRight}
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                <button className="header__icon element--clickable" onClick={() => handlePopupLaunch(<WorkInProgress />)}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </section>
            <section className="header__expand" data-expansion={expansion}>
                <NavMenu 
                    title="Prepare for your launch 🚀" 
                    columns={2} 
                    rows={3} 
                    links={headerLinks.bottomLeft}
                    decoration='underlined'
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                <NavMenu 
                    title="Helpful info ✨" 
                    columns={2} 
                    rows={4} 
                    links={headerLinks.bottomRight}
                    decoration='underlined'
                    tooling={{handleResizing, handlePopupLaunch}}
                />
            </section>
        </header>
    );
}

export default Header;