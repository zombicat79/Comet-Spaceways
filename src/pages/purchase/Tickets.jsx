import { useState, useContext, useEffect } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate, useLoaderData } from 'react-router';

import { createClient } from "@supabase/supabase-js";

import FlightSegment from '../../components/flight/FlightSegment';
import PageRibbon from '../../components/PageRibbon';
import Button from '../../components/Button';

import { minimizeDestinations } from '../../utilities/utils';
import calculateAvailability from '../../utilities/availability-composer';

function Tickets() {
    const [flights, setFlights] = useState({});
    const { flightSearchState } = useContext(FlightSearchContext);
    const { cartState } = useContext(CartContext);
    const navigate = useNavigate();

    const flightSchedule = useLoaderData();
    const departureObj = { 
        origin: minimizeDestinations(flightSearchState.origin),
        destination: minimizeDestinations(flightSearchState.destination),
        date: flightSearchState.departureDate
    }
    const returnObj = flightSearchState.returnDate === '' ? null : {
        origin: minimizeDestinations(flightSearchState.destination),
        destination: minimizeDestinations(flightSearchState.origin),
        date: flightSearchState.returnDate
    }

    useEffect(() => {
        calculateAvailability(flightSchedule, departureObj, returnObj)
            .then((calcResult1) => {
                if (calcResult1?.returns === "pending") return calculateAvailability(flightSchedule, returnObj, null, calcResult1);
                return calcResult1;
            })
            .then((calcResult2) => setFlights(calcResult2))
            .catch(err => console.log(err));
    }, [])

    console.log(flights)

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

export async function fetchFlights() {
    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM SUPABASE
    const supabase = createClient(
        import.meta.env.VITE_SUPABASE_DB_URL,
        import.meta.env.VITE_SUPABASE_DB_KEY
    );

    async function getDataFromDB() {
        const { data, error } = await supabase
        .from('Origins')
        .select()

        if (error) {
            console.log(error);
            return;
        }

        return data;
    }

    const flights = await getDataFromDB();
    return flights;

    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM JSON-SERVER 
    /* return fetch("http://localhost:3000/origins")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err)); */
};
export default Tickets;