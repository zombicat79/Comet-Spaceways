import { useState } from 'react';

import NavBar from './../components/NavBar';
import NavMenu from './../components/NavMenu';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

const headerLinks = {
    topLeft: [
        { id: 1, text: 'book', action: 'navigate', path: '', decoration: null },
        { id: 2, text: 'search a voyage', action: 'navigate', path: '', decoration: null },
        { id: 3, text: 'launch status', action: 'navigate', path: '', decoration: null }
    ],
    topRight: [
        { id: 4, text: 'promos', action: 'navigate', path: '', decoration: null },
        { id: 5, text: 'cosmic club', action: 'navigate', path: '', decoration: null },
        { id: 6, text: 'info', action: 'expand', path: null, decoration: null },
        { id: 7, text: 'log in', action: 'popup', path: null, decoration: 'primary' }
    ],
    bottomLeft: [
        { id: 8, text: 'Help centre', action: 'navigate', path: '', decoration: 'underline' },
        { id: 9, text: 'Fares', action: 'navigate', path: '', decoration: 'underline' },
        { id: 10, text: 'Cargo', action: 'navigate', path: '', decoration: 'underline' },
        { id: 11, text: 'Accomodation', action: 'navigate', path: '', decoration: 'underline' },
        { id: 12, text: 'Onboard experience', action: 'navigate', path: '', decoration: 'underline' },
        { id: 13, text: 'Destinations', action: 'navigate', path: '', decoration: 'underline' }
    ],
    bottomRight: [
        { id: 14, text: 'Check-in info', action: 'navigate', path: '', decoration: 'underline' },
        { id: 15, text: 'Special assistance', action: 'navigate', path: '', decoration: 'underline' },
        { id: 16, text: 'Travel docs', action: 'navigate', path: '', decoration: 'underline' },
        { id: 17, text: 'Additional services', action: 'navigate', path: '', decoration: 'underline' },
        { id: 18, text: 'Flexibility services', action: 'navigate', path: '', decoration: 'underline' },
        { id: 19, text: 'Traveling with children', action: 'navigate', path: '', decoration: 'underline' },
        { id: 20, text: 'Parking and transfers', action: 'navigate', path: '', decoration: 'underline' },
        { id: 21, text: 'Sustainability', action: 'navigate', path: '', decoration: 'underline' },
    ]
}

function Header() {
    const [transparency, setTransparency] = useState(true);
    const [expansion, setExpansion] = useState(false);

    function handleResizing() {
        if (transparency) {
            setTransparency((current) => !current);
            setExpansion((current) => !current);
        }
        if (!transparency) setExpansion((current) => !current);
    }

    function handlePopupLaunch() {
        console.log('popup launched!')
    }

    return (
        <header className="header" data-transparency={transparency}>
            <section className="header__main">
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.topLeft}
                />
                <a className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark} 
                    />
                </a>
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.topRight}
                    tooling={{handleResizing, handlePopupLaunch}}
                />
            </section>
            <section className="header__expand" data-expansion={expansion}>
                <NavMenu 
                    title="Prepare for your launch 🚀" 
                    columns={2} 
                    rows={3} 
                    links={headerLinks.bottomLeft}
                    decoration='underlined'
                />
                <NavMenu 
                    title="Helpful info ✨" 
                    columns={2} 
                    rows={4} 
                    links={headerLinks.bottomRight}
                    decoration='underlined'
                />
            </section>
        </header>
    );
}

export default Header;