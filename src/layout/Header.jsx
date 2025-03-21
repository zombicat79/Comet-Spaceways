import NavBar from './../components/NavBar';

import Logo from '/logos/ctsw-logo_dark_horizontal.png';

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


    return (
        <header className="header">
            <section className="header__main">
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.left}
                />
                <img className="header__logo" src={Logo} />
                <NavBar 
                    direction='horizontal'
                    links={headerLinks.right}
                />
            </section>
            <section className="header__expand">

            </section>
        </header>
    );
}

export default Header;