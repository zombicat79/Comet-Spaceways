import NavBar from './../components/NavBar';

const headerLinks = {
    left: [
        { id: 1, text: 'book a launch', action: 'navigate', path: '' },
        { id: 2, text: 'my voyages', action: 'navigate', path: '' },
        { id: 3, text: 'flight status', action: 'navigate', path: '' },
    ],
    right: [
        { id: 4, text: 'promos', action: 'navigate', path: '' },
        { id: 5, text: 'cosmic club', action: 'navigate', path: '' },
        { id: 6, text: 'info', action: 'expand', path: null },
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