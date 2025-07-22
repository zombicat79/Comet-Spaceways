import { useContext } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import FlightQueryAccess from '../../components/flight/FlightQueryAccess';
import FlightSegment from '../../components/flight/FlightSegment';

function Tickets() {
    return (
        <FlightQueryAccess>
            <TicketDetails />
        </FlightQueryAccess>
    )
}

function TicketDetails() {
    const { flightSearchState } = useContext(FlightSearchContext);

    return (
        <main className="tickets">
            <FlightSegment type='outbound' />
            {flightSearchState.returnDate && <FlightSegment type='inbound' />}
        </main>
    )
}

export default Tickets;