import { createContext } from 'react';
import useLayout from '../hooks/useLayout';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
    const { layoutState, dispatch } = useLayout();

    function handlePopupLaunch(data) {
        dispatch({ type: 'toggle/scroll' });
        dispatch({ type: 'fill/modal', payload: data.content });
        dispatch({ type: 'transform/modal', payload: data.modalClass })
        dispatch({ type: 'resize/modal', payload: {width: data.width, height: data.height} })
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