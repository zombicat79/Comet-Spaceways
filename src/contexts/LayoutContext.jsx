import { createContext } from 'react';
import useLayout from '../hooks/useLayout';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
    const { layoutState, dispatch } = useLayout();

    function handlePopupLaunch(data) {
        dispatch({ type: 'toggle/scroll' });
        dispatch({ type: 'fill/modal', payload: data.content });
        dispatch({ type: 'transform/modal', payload: data.modalClass })
        switch(true) {
            case window.innerWidth <= 600:
                dispatch({ type: 'resize/modal', payload: {width: 'small', height: 'small'} });
                break;
            case data.modalClass === 'flight-preview' && window.innerWidth > 1000:
                dispatch({ type: 'resize/modal', payload: {width: 'large', height: 'regular'} });
                break;
            case data.modalClass === 'flight-preview' && window.innerWidth <= 1000:
                dispatch({ type: 'resize/modal', payload: {width: 'medium', height: 'regular'} });
                break;
            case data.modalClass === 'connection-info':
                dispatch({ type: 'resize/modal', payload: {width: 'regular', height: 'large'} });
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