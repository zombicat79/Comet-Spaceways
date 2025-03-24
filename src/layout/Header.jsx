import { useState, useEffect, useRef } from 'react';

import NavBar from './../components/NavBar';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

const headerLinks = {
    left: [
        { id: 1, text: 'book', action: 'navigate', path: '' },
        { id: 2, text: 'search a voyage', action: 'navigate', path: '' },
        { id: 3, text: 'launch status', action: 'navigate', path: '' }
    ],
    right: [
        { id: 4, text: 'promos', action: 'navigate', path: '' },
        { id: 5, text: 'cosmic club', action: 'navigate', path: '' },
        { id: 6, text: 'info', action: 'expand', path: null },
        { id: 7, text: 'log in', action: 'popup', path: null }
    ]
}

function Header() {
    const [transparency, setTransparency] = useState(false);
    const [expansion, setExpansion] = useState(false);
    let expansionState = useRef(false);
    console.log(expansion)

    function handleResizing() {
        setExpansion((prev) => !prev);
    }

    useEffect(() => {
        setTimeout(() => {
            expansionState.current = !expansionState.current;
        }, 3000)
    }, [expansion])

    return (
        <header className="header" data-transparency={transparency}>
            <section className="header__main">
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.left}
                />
                <a className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark} 
                    />
                </a>
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.right}
                    resizeTool={handleResizing}
                />
            </section>
            <section className="header__expand" data-expansion={expansionState.current}>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
                <h1>Test</h1>
            </section>
        </header>
    );
}

export default Header;