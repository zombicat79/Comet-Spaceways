import { createContext, useEffect, useReducer } from "react";
import useFutureDate from "../hooks/useFutureDate";

const FlightSearchContext = createContext();

const initialState = {
    destinationOffer: [],
    searchScope: '🔄 Round trip',
    origin: 'Earth - Europe',
    destination: 'Mars',
    departureDate: '',
    returnDate: '?',
    passengers: {
        humanoids: 0,
        nhes: 0,
    }
}

function fligtSearchReducer(state, action) {
    switch(action.type) {
        case 'offer-change':
            return { ...state, destinationOffer: action.payload };
        case 'scope-change':
            return { ...state, searchScope: action.payload };
        case 'origin-change':
            return { ...state, origin: action.payload };
        case 'destination-change':
            return { ...state, destination: action.payload };
        case 'departure-change':
            return { ...state, departureDate: action.payload };
        case 'return-change':
        case 'passenger-change':
        default:
            throw new Error('Unknown action');
    }
}

function FlightSearchProvider({ children }) {
    const [state, dispatch] = useReducer(fligtSearchReducer, initialState);
    const futurizedDate = useFutureDate();

    console.log(state)

    useEffect(() => {
        // TEMPORARY HARD-CODED DESTINATIONS (To be fetched from server)
        const destinationOffer = ['Earth - America', 'Earth - Europe', 'Earth - Asia', 
        'Celestia station', 'Moon', 'Mars', 'Venus', 'Ceres', 'Titan']
        // END OF ALERT

        dispatch({ type: 'offer-change', payload: destinationOffer });
        dispatch({ type: 'departure-change', payload: futurizedDate });
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