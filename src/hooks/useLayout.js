import { useReducer } from 'react';

const initialState = {
    viewportWidth: window.innerWidth,
    scroll: true,
    scrollHeight: 0,
    modal: false,
    modalClass: 'generic',
    modalContent: null,
    modalDimensions: {
        width: 'regular',
        height: 'regular'
    },
    asideleft: {
        shown: false,
        content: null
    },
    asideright: {
        shown: false,
        content: null
    }
}

function reducer(state, action) {
    switch(action.type) {
        case 'set/viewportWidth':
            return { ...state, viewportWidth: action.payload };
        case 'toggle/scroll':
            return { ...state, scroll: !state.scroll };
        case 'set/scrollHeight':
            return { ...state, scrollHeight: action.payload };
        case 'toggle/modal':
            return { ...state, modal: !state.modal };
        case 'fill/modal':
            return { ...state, modalContent: action.payload };
        case 'transform/modal':
            return { ...state, modalClass: action.payload };
        case 'resize/modal':
            return { ...state, modalDimensions: {...state.modalDimensions, width: action.payload.width, height: action.payload.height } };
        case 'toggle/aside':
            return { ...state, [`aside${action.payload.side}`]: {...state[`aside${action.payload.side}`], shown: action.payload.shown, content: action.payload.content } }
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