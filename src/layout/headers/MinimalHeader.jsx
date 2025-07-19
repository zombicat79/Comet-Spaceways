import { useContext } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';
import useHeader from './../../hooks/useHeader';
import { Link } from 'react-router';

import LogoLight from '/logos/ctsw-logo_light_horizontal.png';
import LogoDark from '/logos/ctsw-logo_dark_horizontal.png';

function MinimalHeader() {
    const { layoutState } = useContext(LayoutContext);
    const { transparency } = useHeader(layoutState);

    return (
        <header className="header header--minimal" data-transparency={transparency} >
            <section className="header__main">
                {(layoutState.viewportWidth > 360) && <Link to="/" className="link--container">
                    <img 
                        className="header__logo" 
                        src={transparency ? LogoLight : LogoDark}
                        alt="Comet Spaceways"
                    />
                </Link>}
            </section>
        </header>
    )
}

export default MinimalHeader;