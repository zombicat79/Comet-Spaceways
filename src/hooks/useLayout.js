import { useReducer } from 'react';

const initialState = {
    viewportWidth: window.innerWidth,
    scroll: true,
    modal: null,
    modalClass: 'generic',
    modalContent: null,
    modalDimensions: {
        width: 'regular',
        height: 'regular'
    }
}

function reducer(state, action) {
    switch(action.type) {
        case 'set/viewportWidth':
            return { ...state, viewportWidth: action.payload };
        case 'toggle/scroll':
            return { ...state, scroll: !state.scroll };
        case 'toggle/modal':
            return { ...state, modal: !state.modal };
        case 'fill/modal':
            return { ...state, modalContent: action.payload };
        case 'transform/modal':
            return { ...state, modalClass: action.payload };
        case 'resize/modal':
            return { ...state, modalDimensions: {...state.modalDimensions, width: action.payload.width, height: action.payload.height } };
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