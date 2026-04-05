import { useReducer } from "react";

const initialState = {
    name: null,
    surname: null,
    race: '_____',
    nationality: '_____',
    origin: '_____',
    build: null,
    gender: null,
    job: '_____',
    avatar: null,
    username: null,
    password: null
}

function accountReducer(state, action) {
    switch(action.type) {
        case 'account/modifyField':
            if (action.payload.data.field === 'race') {
                const shortenedRaceNaming = action.payload.data.value.split(' ')[0]
                if (state.race === 'humanoid' || action.payload.data.value === 'humanoid') {
                    return { ...initialState, [action.payload.data.field]: action.payload.data.value.replace(/[\s-]/g, '_'), avatar: shortenedRaceNaming };
                } else {
                    return { ...state, [action.payload.data.field]: action.payload.data.value.replace(/[\s-]/g, '_'), avatar: shortenedRaceNaming };
                }
            }
            if (action.payload.data.field === 'build') {
                return { 
                    ...state, 
                    [action.payload.data.field]: action.payload.data.value, 
                    avatar: `${action.payload.data.value}-${state.gender}` 
                };
            }
            if (action.payload.data.field === 'gender') {
                return { 
                    ...state, 
                    [action.payload.data.field]: action.payload.data.value, 
                    avatar: `${state.build}-${action.payload.data.value}` 
                };
            }
            return { ...state, [action.payload.data.field]: action.payload.data.value.replace(/[\s-]/g, '_') };
        case 'account/reset':
            return initialState;
        default:
            return state;
    }
}

function useAccount() {
    const [state, dispatch] = useReducer(accountReducer, initialState);
    return { accountState: state, accountDispatcher: dispatch };
}

export default useAccount;