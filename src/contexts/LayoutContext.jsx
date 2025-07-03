import { createContext } from 'react';
import useLayout from '../hooks/useLayout';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
    const { layoutState, dispatch } = useLayout();

    function handlePopupLaunch(data) {
        dispatch({ type: 'toggle/scroll' });
        dispatch({ type: 'fill/modal', payload: data.content });
        dispatch({ type: 'transform/modal', payload: data.modalClass })
        /* dispatch({ type: 'resize/modal', payload: {width: data.width, height: data.height} }) */
        switch(true) {
            case window.innerWidth <= 600:
                dispatch({ type: 'resize/modal', payload: {width: 'small', height: 'small'} });
                break;
            case layoutState.modalClass === 'flight-preview' && window.innerWidth > 1000:
                dispatch({ type: 'resize/modal', payload: {width: 'large', height: 'regular'} });
                break;
            case layoutState.modalClass === 'flight-preview' && window.innerWidth <= 1000:
                dispatch({ type: 'resize/modal', payload: {width: 'medium', height: 'regular'} });
                break;
            default:
                dispatch({ type: 'resize/modal', payload: {width: 'regular', height: 'regular'} });
        }
        setTimeout(() => {
            dispatch({ type: 'toggle/modal' });
        }, 1000);
    }

    return (
        <LayoutContext.Provider value={{
            layoutState,
            handlePopupLaunch,
            dispatch
        }}>
            {children}
        </LayoutContext.Provider>
    )
}

export { LayoutContext, LayoutProvider };