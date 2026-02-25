import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'modify/field':
            const field = action.payload.field;
            return {...state, [field]: action.payload.value}
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