import { useReducer } from "react";

const initialState = {
    name: '',
    surname: '',
    race: 'N/A',
    nationality: 'N/A',
    origin: 'N/A',
    build: '',
    gender: '',
    job: 'N/A',
    avatar: '',
    username: '',
    password: ''
}

function accountReducer(state, action) {
    switch(action.type) {
        case 'account/modifyField':
            if (action.payload.data.field === 'race') {
                const shortenedRaceNaming = action.payload.data.value.split(' ')[0]
                if (state.race === 'humanoid' || action.payload.data.value === 'humanoid') {
                    return { ...initialState, [action.payload.data.field]: action.payload.data.value, avatar: shortenedRaceNaming };
                } else {
                    return { ...state, [action.payload.data.field]: action.payload.data.value, avatar: shortenedRaceNaming };
                }
            }
            return { ...state, [action.payload.data.field]: action.payload.data.value };
        case 'account/reset':
            return initialState;
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