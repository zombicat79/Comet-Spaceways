import { useContext } from 'react';
import { LayoutContext } from './../contexts/LayoutContext';

import WorkInProgress from './infopieces/WorkInProgress';

function Card({ children, bgImg }) {
    const { handlePopupLaunch } = useContext(LayoutContext);

    return (
        <a className="card element--clickable" onClick={() => handlePopupLaunch({ modalClass: 'generic', content: <WorkInProgress /> })}>
            <div className={`card__img card__img--${bgImg}`}></div>
            <div className="card__content">
                {children}
            </div>
        </a>
    )
}

export default Card;