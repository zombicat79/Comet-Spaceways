import { FlightSearchProvider } from "../../contexts/FlightSearchContext";

function FlightQueryAccess({ children }) {
    return (
        <FlightSearchProvider>
            {children}
        </FlightSearchProvider>
    )
}

export default FlightQueryAccess;