import { useEffect, useContext } from 'react';
import { LayoutContext } from './../contexts/LayoutContext';

import Modal from './Modal';
import FlightTicket from "../components/FlightPreview";

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
            className={layoutState.scroll ? 'scrollblocker scrollblocker-off' : 'scrollblocker scrollblocker--on'}
            onClick={(e) => {
                if (e.target.classList.contains('modal')) return;
                if (e.target.classList.contains('scrollblocker--on')) {
                    if (layoutState.modal) {
                        dispatch({ type: 'toggle/modal' });
                        setTimeout(() => {
                            dispatch({ type: 'toggle/scroll' });
                            dispatch({ type: 'fill/modal', payload: null })
                        }, 1000);
                    }
                    if (layoutState.asideleft.shown) {
                        dispatch({ type: 'toggle/aside', payload: {
                            side: 'left',
                            shown: false,
                            content: null
                        }});
                        dispatch({ type: 'toggle/scroll' });
                    }
                    if (layoutState.asideright.shown) {
                        dispatch({ type: 'toggle/aside', payload: {
                            side: 'right',
                            shown: false,
                            content: null
                        }});
                        dispatch({ type: 'toggle/scroll' });
                    }
                }
            }}
        >
            <Modal 
                modalShown={layoutState.modal}
                modalClass={layoutState.modalClass}
                content={layoutState.modalContent} 
                width={layoutState.modalDimensions.width} 
                height={layoutState.modalDimensions.height} 
            />
        </div>
    )
}

export default ScrollBlocker;