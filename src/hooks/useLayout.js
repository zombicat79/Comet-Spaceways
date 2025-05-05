import { useReducer } from 'react';

const initialState = {
    scroll: true,
    modal: false
}

function reducer(state, action) {
    switch(action.type) {
        case 'toggle/scroll':
            return { ...state, scroll: !state.scroll };
        case 'toggle/modal':
            return { ...state, modal: !state.modal };
        default:
            return state;
    }
}

function useLayout() {
    const [layoutState, dispatch] = useReducer(reducer, initialState);

    return { layoutState, dispatch };
}

export default useLayout;