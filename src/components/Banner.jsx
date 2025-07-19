import { useContext } from 'react';
import { Link } from 'react-router';
import { LayoutContext } from '../contexts/LayoutContext';

function Banner({ background, textStyle, textContent, children }) {
    const { layoutState } = useContext(LayoutContext);
    
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
        case 'black-hole':
            backgroundOption = 4;
            break;
        default:
            backgroundOption = 1;
    }

    return (
        <section className={`banner banner--${backgroundOption} banner--${background.height}`} >
            {children}
            
            <div className={textStyle.align ? `banner__msg banner__msg--${textStyle.align}`: 'banner__msg'}>
                <h1 className="banner__heading">{textContent.heading}</h1>
                <div className="banner__text">{textContent.body}</div>
            </div>

            {layoutState.viewportWidth <= 360 && 
                <Link to="/">
                    <img className="banner__logo" src="/logos/ctsw-logo_light_compact.png" alt="CS logo" />
                </Link>
            }
        </section>
    )
}

export default Banner;