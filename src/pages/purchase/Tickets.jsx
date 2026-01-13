import { useState, useContext, useEffect } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router';

import FlightSegment from '../../components/flight/FlightSegment';
import PageRibbon from '../../components/PageRibbon';
import Button from '../../components/Button';

import { minimizeDestinations } from '../../utilities/utils';
import calculateAvailability from '../../utilities/availability-composer';
import { checkFlightCookies } from './../../utilities/cookie-checker';

function Tickets({ flightSchedule }) {
    const [flights, setFlights] = useState({});
    const { flightSearchState } = useContext(FlightSearchContext);
    const { cartState } = useContext(CartContext);
    const navigate = useNavigate();

    const departureObj = { 
        origin: minimizeDestinations(flightSearchState.origin),
        destination: minimizeDestinations(flightSearchState.destination),
        date: flightSearchState.departureDate
    }
    const returnObj = flightSearchState.returnDate === null ? null : {
        origin: minimizeDestinations(flightSearchState.destination),
        destination: minimizeDestinations(flightSearchState.origin),
        date: flightSearchState.returnDate
    }

    useEffect(() => {
        if (flightSchedule?.data) {
            calculateAvailability(flightSchedule.data, departureObj, returnObj)
            .then((calcResult1) => {
                if (calcResult1?.returns === "pending") return calculateAvailability(flightSchedule.data, returnObj, null, calcResult1);
                return calcResult1;
            })
            .then((calcResult2) => setFlights(calcResult2))
            .catch(err => console.log(err));
        } else if (!flightSchedule || flightSchedule?.error) {
            setFlights({});
        } else {
            setFlights(flightSchedule)
        }
    }, [flightSchedule])

    let proceedButtonState;
    if (flightSearchState.searchScope === '🔄 Round Trip') {
        cartState.outboundFlight && cartState.inboundFlight ? proceedButtonState = false : proceedButtonState = true;
    } else {
        cartState.outboundFlight ? proceedButtonState = false : proceedButtonState = true;
    }

    return (
        <main className="tickets">
            <FlightSegment type='outbound' flightData={flights?.departures} />
            {flightSearchState.searchScope === "🔄 Round Trip" && <FlightSegment type='inbound' flightData={flights?.returns} />}
            
            <PageRibbon>
                <Button type="primary" action={() => navigate("/purchase/details")} text="proceed with purchase 🚀" isDisabled={proceedButtonState} />
            </PageRibbon>
        </main>
    )
}

export default Tickets;