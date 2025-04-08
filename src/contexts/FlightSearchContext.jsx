import { createContext, useState } from "react";

const FlightSearchContext = createContext();

function FlightSearchProvider({ children }) {
    const [searchScope, setSearchScope] = useState('round trip');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState('');
 
    function handleSearchScoping(newScope) {
        setSearchScope(newScope);
    }

    return (
        <FlightSearchContext.Provider value={{
            searchScope,
            handleSearchScoping
        }}>
            {children}
        </FlightSearchContext.Provider>
    )
}

export { FlightSearchContext, FlightSearchProvider };