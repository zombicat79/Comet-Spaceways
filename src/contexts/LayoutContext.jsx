import { createContext } from 'react';
import useLayout from '../hooks/useLayout';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
    const { layoutState, dispatch } = useLayout();

    return (
        <LayoutContext.Provider value={{
            layoutState,
            dispatch
        }}>
            {children}
        </LayoutContext.Provider>
    )
}

export { LayoutContext, LayoutProvider };