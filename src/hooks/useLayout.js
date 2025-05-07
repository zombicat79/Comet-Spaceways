import { useReducer } from 'react';

const initialState = {
    scroll: true,
    modal: null,
    modalContent: null
}

function reducer(state, action) {
    switch(action.type) {
        case 'toggle/scroll':
            return { ...state, scroll: !state.scroll };
        case 'toggle/modal':
            return { ...state, modal: !state.modal };
        case 'fill/modal':
            return { ...state, modalContent: action.payload };
        default:
            return state;
    }
}

function useLayout() {
    const [layoutState, dispatch] = useReducer(reducer, initialState);
    console.log(layoutState)

    return { layoutState, dispatch };
}

export default useLayout;