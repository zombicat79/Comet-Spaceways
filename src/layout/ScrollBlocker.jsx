import { useEffect, useContext } from 'react';
import { LayoutContext } from './../contexts/LayoutContext';

import Modal from './Modal';

function ScrollBlocker() {
    const { layoutState, dispatch } = useContext(LayoutContext);

    useEffect(() => {
        const appBody = document.querySelector('body');
        if (layoutState.scroll) {
            appBody.classList.remove('scrollblock');
        } else {
            appBody.classList.add('scrollblock');
        }
    }, [layoutState])

    return (
        <div 
            className={layoutState.scroll ? 'scrollblocker': 'scrollblocker scrollblocker--on'}
            onClick={(e) => {
                if (e.target.classList.contains('modal')) return;
                dispatch({ type: 'toggle/modal' });
                dispatch({ type: 'toggle/scroll' });
            }}
        >
            {layoutState.modal && <Modal />}
        </div>
    )
}

export default ScrollBlocker;