import { useContext } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import Tickets from "../../pages/purchase/Tickets";
import FlightScheduleLoader from './FlightScheduleLoader';

import { minimizeDestinations } from '../../utilities/utils';
import { checkFlightCookies } from "./../../utilities/cookie-checker";

function FlightFetcher() {
    const { flightSearchState } = useContext(FlightSearchContext);
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
    const cookieCheck = checkFlightCookies(departureObj, returnObj);

    if (cookieCheck) {
        return <Tickets flightSchedule={cookieCheck} />
    }

    return <FlightScheduleLoader />
}

export default FlightFetcher;