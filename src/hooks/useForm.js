import { useReducer, useMemo } from 'react';

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
    const formState = useMemo(() => {
        return { [formId]: formValues };
    }, [formValues])

    return { formState, dispatch };
}

export default useForm;