import { useEffect, useContext } from 'react';
import { LayoutContext } from './../contexts/LayoutContext';

import Modal from './Modal';
import Loader from '../components/Loader';

function ScrollBlocker() {
    const { layoutState, dispatch } = useContext(LayoutContext);
    const cssClasses = `scrollblocker ${layoutState.scroll ? 'scrollblocker--off' : 'scrollblocker--on'} ${layoutState.isClickable ? 'scrollblocker--clickable' : 'scrollblocker--unclickable'}`

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
            className={cssClasses}
            onClick={(e) => {
                if (e.target.classList.contains('modal')) return;
                if (e.target.classList.contains('scrollblocker--on') && layoutState.modalContent === 'error-notice') return;
                if (e.target.classList.contains('scrollblocker--on')) {
                    if (layoutState.modal) {
                        dispatch({ type: 'toggle/modal' });
                        setTimeout(() => {
                            dispatch({ type: 'toggle/scroll' });
                            dispatch({ type: 'fill/modal', payload: {content: null, props: {} }})
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
            {layoutState.modal &&
            <Modal 
                modalShown={layoutState.modal}
                modalClass={layoutState.modalClass}
                content={layoutState.modalContent}
                props={layoutState.modalProps} 
                width={layoutState.modalDimensions.width} 
                height={layoutState.modalDimensions.height} 
            />
            }
            {layoutState.loader &&
            <Loader spinner="spinner_light" />
            }
        </div>
    )
}

export default ScrollBlocker;