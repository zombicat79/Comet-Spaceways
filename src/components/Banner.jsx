import { useRef, useEffect, useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

function Banner({ background, textStyle, textContent, children }) {
    const bannerSection = useRef(null);
    const { layoutState, dispatch } = useContext(LayoutContext);
    
    let backgroundOption = 0;
    switch(background.img) {
        case 'space-beer':
            backgroundOption = 1;
            break;
        case 'space-sunrise':
            backgroundOption = 2;
            break;
        case 'earth-moon':
            backgroundOption = 3;
            break;
        default:
            backgroundOption = 1;
    }

    useEffect(() => {
        dispatch({ type: 'set/viewportWidth', payload: bannerSection.current.offsetWidth });
    }, [bannerSection]);

    return (
        <section className={`banner banner--${backgroundOption} banner--${background.height}`} ref={bannerSection}>
            {children}
            
            <div className={textStyle.align ? `banner__msg banner__msg--${textStyle.align}`: 'banner__msg'}>
                <h1 className="banner__heading">{textContent.heading}</h1>
                <p className="banner__text">{textContent.body}</p>
            </div>

            {layoutState.viewportWidth <= 360 && <img className="banner__logo" src="/logos/ctsw-logo_light_compact.png" alt="CS logo" />}
        </section>
    )
}

export default Banner;