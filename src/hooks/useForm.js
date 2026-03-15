import { useReducer } from 'react';

function reducer(state, action) {
    const field = action.payload.field;
    switch(action.type) {
        case 'modify/field':
            return {...state, [field]: action.payload.value}
        case 'toggle/check':
            return {...state, [field]: !state[field]}
        default:
            return state;
    }
}

function useForm(formId, initialState) {
    const [formValues, dispatch] = useReducer(reducer, initialState);
    const formState = {
        [formId]: formValues
    }

    return { formState, dispatch };
}

export default useForm;