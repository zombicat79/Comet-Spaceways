import { useReducer } from "react";

const initialState = {
    name: '',
    surname: '',
    race: 'N/A',
    nationality: 'N/A',
    origin: 'N/A',
    build: '',
    job: 'N/A',
    avatar: '',
    username: '',
    password: ''
}

function accountReducer(state, action) {
    switch(action.type) {
        case 'account/modifyField':
            return { ...state, [action.payload.data.field]: action.payload.data.value };
        default:
            return state;
    }
}

function useAccount() {
    const [state, dispatch] = useReducer(accountReducer, initialState);
    console.log(state)
    return { accountState: state, accountDispatcher: dispatch };
}

export default useAccount;