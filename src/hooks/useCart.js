import { useReducer } from 'react';

const initialState = {
    outboundFlight: null,
    inboundFlight: null,
    passengers: null
}

function cartReducer(state, action) {
    switch(action.type) {
        case "cart/addOutbound":
            return { ...state, outboundFlight: action.payload };
        case "cart/addInbound":
            return { ...state, inboundFlight: action.payload };
        case "cart/removeOutbound":
            return { ...state, outboundFlight: null };
        case "cart/removeInbound":
            return { ...state, inboundFlight: null };
        case "cart/addPassengers":
            return { ...state, passengers: action.payload };
        default:
            return state;
    }
}

function useCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return { state, dispatch };
}

export default useCart;