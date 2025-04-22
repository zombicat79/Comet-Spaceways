import { createContext, useEffect, useReducer } from "react";
import useFutureDate from "../hooks/useFutureDate";

const FlightSearchContext = createContext();

const initialState = {
    dropdownState: new Map([
        ['Voyage-Type', false],
        ['Origin', false],
        ['Destination', false],
        ['Departure-Date', false],
        ['Return-Date', false],
        ['Passengers', false]
    ]),
    destinationOffer: [],
    searchScope: '🔄 Round trip',
    origin: 'Earth - Europe',
    destination: 'Mars',
    departureDate: '',
    returnDate: '',
    passengers: {
        humanoids: 0,
        nhes: 0,
    }
}

function fligtSearchReducer(state, action) {
    switch(action.type) {
        case 'dropdown-change':
            const prevDropdownState = new Map(state.dropdownState);
            prevDropdownState.forEach((value, key) => {
                if (key === action.payload) prevDropdownState.set(key, !value);
                if (key !== action.payload) prevDropdownState.set(key, false);
            });
            return { ...state, dropdownState: prevDropdownState}
        case 'offer-change':
            return { ...state, destinationOffer: action.payload };
        case 'scope-change':
            return { ...state, searchScope: action.payload };
        case 'origin-change':
            if (action.payload !== state.destination) {
                return { ...state, origin: action.payload };
            } else {
                return state;
            }
        case 'destination-change':
            if (action.payload !== state.origin) {
                return { ...state, destination: action.payload };
            } else {
                return state;
            }
        case 'departure-change':
            return { ...state, departureDate: action.payload };
        case 'return-change':
            return { ...state, returnDate: action.payload };
        case 'passenger-change':
        default:
            throw new Error('Unknown action');
    }
}

function FlightSearchProvider({ children }) {
    const [state, dispatch] = useReducer(fligtSearchReducer, initialState);
    const { futurizedDate, dateComponents } = useFutureDate();

    console.log(state)

    useEffect(() => {
        // TEMPORARY HARD-CODED DESTINATIONS (To be fetched from server)
        const destinationOffer = ['Earth - America', 'Earth - Europe', 'Earth - Asia', 
        'Celestia Station', 'Moon', 'Mars', 'Venus', 'Ceres', 'Titan']
        // END OF ALERT

        dispatch({ type: 'offer-change', payload: destinationOffer });
        dispatch({ type: 'departure-change', payload: futurizedDate });
        dispatch({ type: 'return-change', payload: new Date(`${dateComponents.month + 2}-${dateComponents.day}-${dateComponents.year + 100}`) });
    }, [])

    return (
        <FlightSearchContext.Provider value={{
            flightSearchState: state,
            changeFlightSearchState: dispatch
        }}>
            {children}
        </FlightSearchContext.Provider>
    )
}

export { FlightSearchContext, FlightSearchProvider };