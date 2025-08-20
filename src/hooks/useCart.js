import { useReducer } from 'react';

const initialState = {
    outboundFlight: null,
    inboundFlight: null
}

function cartReducer(state, action) {
    switch(action.type) {
        default:
            return state;
    }
}

function useCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return { state, dispatch };
}

export default useCart;