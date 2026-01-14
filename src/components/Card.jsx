import { useContext } from 'react';
import { Link } from 'react-router';
import { LayoutContext } from './../contexts/LayoutContext';

import WorkInProgress from './infopieces/WorkInProgress';

function Card({ children, bgImg, link }) {
    const { handlePopupLaunch } = useContext(LayoutContext);
    console.log(link)

    if (link) {
        return (
            <Link to={`/destinations/${link}`}>
                <div className="card element--clickable">
                    <div className={`card__img card__img--${bgImg}`}></div>
                    <div className="card__content">
                        {children}
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div className="card element--clickable" onClick={() => handlePopupLaunch({ modalClass: 'generic', content: <WorkInProgress /> })}>
            <div className={`card__img card__img--${bgImg}`}></div>
            <div className="card__content">
                {children}
            </div>
        </div>
    )
}

export default Card;