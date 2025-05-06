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
    }, [layoutState.scroll])

    return (
        <div 
            className={layoutState.scroll ? 'scrollblocker scrollblocker-off': 'scrollblocker scrollblocker--on'}
            onClick={(e) => {
                if (e.target.classList.contains('modal')) return;
                if (e.target.classList.contains('scrollblocker--on')) {
                    dispatch({ type: 'toggle/modal' });
                    setTimeout(() => {
                        dispatch({ type: 'toggle/scroll' });
                    }, 1000);
                }
            }}
        >
            <Modal modalShown={layoutState.modal} />
        </div>
    )
}

export default ScrollBlocker;