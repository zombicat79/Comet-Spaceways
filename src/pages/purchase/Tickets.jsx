import { useContext, useEffect } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router';

import FlightSegment from '../../components/flight/FlightSegment';
import PageRibbon from '../../components/PageRibbon';
import Button from '../../components/Button';

import { minimizeDestinations } from '../../utilities/utils';
import calculateAvailability from '../../utilities/availability-composer';

function Tickets() {
    const { flightSearchState } = useContext(FlightSearchContext);
    const { cartState } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/origins")
            .then(res => res.json())
            .then(data => {
                const departureObj = { 
                    origin: minimizeDestinations(flightSearchState.origin),
                    destination: minimizeDestinations(flightSearchState.destination),
                    date: flightSearchState.departureDate
                }
                calculateAvailability(data, departureObj);
            })
            .catch(err => console.log(err));
    }, [])

    let proceedButtonState;
    if (flightSearchState.searchScope === '🔄 Round Trip') {
        cartState.outboundFlight && cartState.inboundFlight ? proceedButtonState = false : proceedButtonState = true;
    } else {
        cartState.outboundFlight ? proceedButtonState = false : proceedButtonState = true;
    }

    return (
        <main className="tickets">
            <FlightSegment type='outbound' />
            {flightSearchState.searchScope === "🔄 Round Trip" && <FlightSegment type='inbound' />}
            
            <PageRibbon>
                <Button type="primary" action={() => navigate("/purchase/details")} text="proceed with purchase 🚀" isDisabled={proceedButtonState} />
            </PageRibbon>
        </main>
    )
}

export default Tickets;