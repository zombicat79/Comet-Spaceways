import { useEffect, useContext } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';
import useHeader from './../../hooks/useHeader';
import { Link, useLocation } from 'react-router';

import NavBar from '../../components/NavBar';
import NavMenu from '../../components/NavMenu';
import AsideMenu from '../../components/AsideMenu';

import { menuLinks } from '../../data/menu-links';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

function Header() {
    const { layoutState, handlePopupLaunch, dispatch } = useContext(LayoutContext);
    const { transparency, expansion, handleResizing } = useHeader(layoutState);
    const location = useLocation();
    
    function openAside() {
        dispatch({ type: 'toggle/scroll' });
        dispatch({ type: 'toggle/aside', payload: {
            side: 'left',
            shown: true,
            content: <AsideMenu links={menuLinks} /> 
        }})
    }

    function closeAside() {
        dispatch({ type: 'toggle/aside', payload: {
            side: 'left',
            shown: false,
            content: null
        }});
        dispatch({ type: 'set/scroll', payload: true });
    }

    useEffect(() => {
        if (!transparency && expansion) {
            handleResizing();
        }
        closeAside();
    }, [location])

    return (
        <header className="header" data-transparency={transparency} >
            <section className="header__main">
                <button className="header__icon element--clickable" onClick={openAside}>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <NavBar 
                    direction='horizontal'
                    links={menuLinks.topLeft}
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                {(layoutState.viewportWidth > 360) && <Link to="/" className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark}
                        alt="Comet Spaceways"
                    />
                </Link>}
                <NavBar 
                    direction='horizontal'
                    links={menuLinks.topRight}
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                <button className="header__icon element--clickable" onClick={() => handlePopupLaunch({ modalClass: 'large', content: 'login' })}>
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
                    links={menuLinks.bottomLeft}
                    decoration='underlined'
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                <NavMenu 
                    title="Helpful info ✨" 
                    columns={2} 
                    rows={4} 
                    links={menuLinks.bottomRight}
                    decoration='underlined'
                    tooling={{handleResizing, handlePopupLaunch}}
                />
                <button id="foldback-btn" className="element--clickable" onClick={(handleResizing)}>
                    <svg fill="#000000" viewBox="0 0 512 512" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M297.2,478l20.7-21.6L108.7,256L317.9,55.6L297.2,34L65.5,256L297.2,478z M194.1,256L425.8,34l20.7,21.6L237.3,256 l209.2,200.4L425.8,478L194.1,256z"></path></g>
                    </svg>
                </button>
            </section>
        </header>
    );
}

export default Header;