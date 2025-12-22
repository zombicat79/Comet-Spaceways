import { useReducer } from 'react';

const initialState = {
    viewportWidth: window.innerWidth,
    scroll: true,
    scrollHeight: 0,
    modal: null,
    loader: false,
    modalClass: 'generic',
    modalContent: null,
    modalDimensions: {
        width: 'regular',
        height: 'regular'
    },
    asideleft: {
        shown: null,
        content: null
    },
    asideright: {
        shown: null,
        content: null
    }
}

function reducer(state, action) {
    switch(action.type) {
        case 'set/viewportWidth':
            return { ...state, viewportWidth: action.payload };
        case 'toggle/scroll':
            return { ...state, scroll: !state.scroll };
        case 'set/scroll':
            return { ...state, scroll: action.payload };
        case 'toggle/loader':
            return { ...state, loader: !state.loader };
        case 'set/loader':
            return { ...state, loader: action.payload };
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
    // console.log(layoutState)

    return { layoutState, dispatch };
}

export default useLayout;