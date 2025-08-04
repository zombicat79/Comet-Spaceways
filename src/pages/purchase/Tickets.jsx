import { useContext } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import FlightSegment from '../../components/flight/FlightSegment';

function Tickets() {
    const { flightSearchState } = useContext(FlightSearchContext);

    return (
        <main className="tickets">
            <FlightSegment type='outbound' />
            {flightSearchState.searchScope === "🔄 Round Trip" && <FlightSegment type='inbound' />}
        </main>
    )
}

export default Tickets;