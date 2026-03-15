import { useReducer } from 'react';

const initialState = {
    outboundFlight: null,
    inboundFlight: null,
    passengers: {}
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
        case "cart/modifyPassengers":
            const passengerId = action.payload.id;
            if (state.passengers[passengerId]) {
                const hasField = state.passengers[passengerId].data.find((item) => item.field === action.payload.data.field);
                if (hasField) {
                    const modifiedData = state.passengers[passengerId].data.map((el) => {
                        if (el.field === action.payload.data.field) return { field: action.payload.data.field, value: action.payload.data.value };
                        return el;
                    })
                    return {...state, passengers: { ...state.passengers, [passengerId]: 
                        {
                            data: modifiedData,
                            formRules: action.payload.data.formRules
                        } 
                    }};
                } else {
                    return {...state, passengers: { ...state.passengers, [passengerId]: 
                        {
                            data: [...state.passengers[passengerId].data, { field: action.payload.data.field, value: action.payload.data.value }],
                            formRules: action.payload.data.formRules
                        } 
                    }};
                }
            } else {
                return {...state, passengers: { ...state.passengers, [passengerId]: 
                    {
                        data: [{ field: action.payload.data.field, value: action.payload.data.value }],
                        formRules: action.payload.data.formRules
                    } 
                }};
            }
        case "cart/removePassengers":
            return { ...state, passengers: {} };
        default:
            return state;
    }
}

function useCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    console.log(state)
    return { state, dispatch };
}

export default useCart;